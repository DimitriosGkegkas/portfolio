import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { Worker } from 'node:worker_threads';
import { once } from 'node:events';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { createWarehouseScanner, warehouseTriangles, LIDAR } from '../src/Routes/robotics/lidar/scanWarehouse';

const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200));
floor.rotation.x = -Math.PI / 2;
const floorScanner = createWarehouseScanner(warehouseTriangles(floor), 64);
const pose = { x: 0, y: LIDAR.height, z: 4, heading: 0 };
const movedPose = { ...pose, x: 1.5, z: -2 };
const first = floorScanner.scan(pose);
const moved = floorScanner.scan(movedPose);
assert.equal(first.count, moved.count);
assert.ok(first.count > 1000);
// Every beam hits a freshly sampled floor location centered on the new sensor.
for (let i = 0; i < first.count; i++) {
  assert.ok(Math.abs(moved.samples[i * 3] - first.samples[i * 3] - 1.5) < 1e-5);
  assert.ok(Math.abs(moved.samples[i * 3 + 1]) < 1e-5);
  assert.ok(Math.abs(moved.samples[i * 3 + 2] - first.samples[i * 3 + 2] + 6) < 1e-5);
}
const rotated = floorScanner.scan({ ...pose, heading: Math.PI / 2 });
assert.ok(Math.abs(rotated.samples[0] - (first.samples[2] - pose.z)) < 1e-5);
assert.ok(Math.abs(rotated.samples[2] - pose.z) < 1e-5);

const scene = new THREE.Group();
scene.add(floor);
const wall = new THREE.Mesh(new THREE.PlaneGeometry(200, 200));
wall.position.z = -3;
scene.add(wall);
const scanner = createWarehouseScanner(warehouseTriangles(scene), 64);
const occluded = scanner.scan(pose);
let wallHits = 0;
for (let i = 0; i < occluded.count; i++) {
  const z = occluded.samples[i * 3 + 2];
  assert.ok(z >= -3.00001, 'A return must not pass through the first wall');
  if (Math.abs(z + 3) < 1e-5) wallHits++;
}
assert.ok(wallHits > 100);
assert.equal(scanner.scan(movedPose, occluded.samples).samples, occluded.samples, 'Reuse the output buffer');

const bytes = fs.readFileSync('public/robotics/warehouse.glb');
// Use the installed Node decoder to test the same compressed GLTF used in-browser.
const require = createRequire(`${process.cwd()}/package.json`);
const draco = await require('draco3d').createDecoderModule({});
const decoder = {
  preload() { return this; },
  decodeDracoFile(buffer: ArrayBuffer, onLoad: (geometry: THREE.BufferGeometry) => void, attributes: Record<string, number>) {
    const decoder = new draco.Decoder();
    const input = new draco.DecoderBuffer();
    input.Init(new Int8Array(buffer), buffer.byteLength);
    const mesh = new draco.Mesh();
    const status = decoder.DecodeBufferToMesh(input, mesh);
    assert.ok(status.ok(), status.error_msg());
    const geometry = new THREE.BufferGeometry();
    for (const [name, id] of Object.entries(attributes)) {
      const attribute = decoder.GetAttributeByUniqueId(mesh, id);
      const values = new draco.DracoFloat32Array();
      decoder.GetAttributeFloatForAllPoints(mesh, attribute, values);
      const array = new Float32Array(values.size());
      for (let i = 0; i < array.length; i++) array[i] = values.GetValue(i);
      geometry.setAttribute(name, new THREE.BufferAttribute(array, attribute.num_components()));
      draco.destroy(values);
    }
    const indices = new Uint32Array(mesh.num_faces() * 3);
    const face = new draco.DracoInt32Array();
    for (let i = 0; i < mesh.num_faces(); i++) {
      decoder.GetFaceFromMesh(mesh, i, face);
      for (let j = 0; j < 3; j++) indices[i * 3 + j] = face.GetValue(j);
    }
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    for (const object of [face, status, mesh, input, decoder]) draco.destroy(object);
    onLoad(geometry);
  },
};
const gltf = await new GLTFLoader().setDRACOLoader(decoder as unknown as DRACOLoader)
  .parseAsync(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength), '');
const start = performance.now();
const warehouse = createWarehouseScanner(warehouseTriangles(gltf.scene), LIDAR.columns);
const buildMs = performance.now() - start;
const reports = [];
let initialKeys: Set<string> | undefined;
for (const [poseIndex, robotPose] of [pose, { ...pose, z: -0.8 }, { ...pose, x: -0.9, z: -4.5, heading: -0.26 }].entries()) {
  const start = performance.now();
  const result = warehouse.scan(robotPose);
  const scanMs = performance.now() - start;
  assert.ok(result.count > 10000);
  if (poseIndex === 0) {
    let pitchBatchReturns = 0;
    for (let startRing = 0; startRing < LIDAR.rings; startRing += LIDAR.batchRings) {
      const ringCount = Math.min(LIDAR.batchRings, LIDAR.rings - startRing);
      pitchBatchReturns += warehouse.scanChunk(robotPose, startRing, ringCount).count;
    }
    assert.equal(pitchBatchReturns, result.count, 'Pitch batches must reproduce the complete scan');
  }
  const keys = new Set<string>();
  for (let i = 0; i < result.count; i++) {
    const p = result.samples.subarray(i * 3, i * 3 + 3);
    assert.ok(Math.hypot(p[0] - robotPose.x, p[1] - robotPose.y, p[2] - robotPose.z) <= LIDAR.range + 1e-4);
    keys.add(Array.from(p, v => v.toFixed(3)).join(','));
  }
  if (initialKeys) {
    const reused = [...keys].filter(key => initialKeys!.has(key)).length / keys.size;
    assert.ok(reused < 0.1, 'Robot motion must produce new surface samples, not reuse baked rings');
  } else initialKeys = keys;
  reports.push({ pose: robotPose, returns: result.count, scanMs: Math.round(scanMs) });
}
console.log(JSON.stringify({ checks: 'ring recentering, heading, nearest-hit occlusion, buffer reuse, pitch batching, new warehouse samples', buildMs: Math.round(buildMs), scans: reports }, null, 2));

// Exercise the actual browser worker handler with a Node transport adapter.
const workerCode = require('esbuild').buildSync({
  entryPoints: ['src/Routes/robotics/lidar/warehouseScan.worker.ts'],
  bundle: true, format: 'iife', platform: 'browser', write: false,
}).outputFiles[0].text;
const worker = new Worker(`
  const { parentPort } = require('node:worker_threads');
  globalThis.self = { postMessage: (data, transfer) => parentPort.postMessage(data, transfer) };
  ${workerCode}
  parentPort.on('message', data => self.onmessage({ data }));
`, { eval: true });
try {
  const triangles = warehouseTriangles(gltf.scene);
  let response = once(worker, 'message', { signal: AbortSignal.timeout(10000) });
  worker.postMessage({ type: 'init', triangles, columns: LIDAR.mobileColumns }, [triangles.buffer]);
  assert.equal(triangles.byteLength, 0);
  assert.equal((await response)[0].type, 'ready');
  response = once(worker, 'message', { signal: AbortSignal.timeout(10000) });
  worker.postMessage({ type: 'scan', pose, startRing: 0, ringCount: LIDAR.batchRings });
  const [scan] = await response;
  assert.equal(scan.type, 'scan');
  assert.deepEqual(scan.pose, pose);
  assert.equal(scan.startRing, 0);
  assert.equal(scan.ringCount, LIDAR.batchRings);
  assert.ok(scan.count > 500);
  response = once(worker, 'message', { signal: AbortSignal.timeout(10000) });
  worker.postMessage({
    type: 'scan',
    pose: movedPose,
    startRing: LIDAR.batchRings,
    ringCount: LIDAR.batchRings,
    samples: scan.samples,
  }, [scan.samples.buffer]);
  assert.equal(scan.samples.byteLength, 0);
  const [next] = await response;
  assert.deepEqual(next.pose, movedPose);
  assert.equal(next.startRing, LIDAR.batchRings);
  assert.ok(next.count > 500);
  assert.ok(next.samples.byteLength > 0);
  console.log('Worker initialization, scan delivery, pose updates and buffer transfer/recycling passed.');
} finally {
  await worker.terminate();
}
