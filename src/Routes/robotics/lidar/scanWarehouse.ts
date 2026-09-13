import * as THREE from 'three';
import { MeshBVH } from 'three-mesh-bvh';

export const LIDAR = {
  height: 1.27,
  near: 0.25,
  range: 32,
  colorHeightMin: 0,
  colorHeightMax: 3.1,
  rings: 92,
  columns: 768,
  mobileColumns: 384,
  batchRings: 6,
  batchesPerSecond: 30,
  decaySeconds: 2,
  historySweeps: 4,
  pointOpacity: 0.5,
  pointSize: 2,
} as const;

export type ScanPose = { x: number; y: number; z: number; heading: number };

export type ScanRequest =
  | { type: 'init'; triangles: Float32Array; columns: number }
  | { type: 'scan'; pose: ScanPose; startRing: number; ringCount: number; samples?: Float32Array };

export type ScanResponse =
  | { type: 'ready' }
  | { type: 'scan'; pose: ScanPose; startRing: number; ringCount: number; samples: Float32Array; count: number };

// Copy world-space triangles without changing the cached GLTF or its materials.
export function warehouseTriangles(scene: THREE.Object3D) {
  scene.updateMatrixWorld(true);
  const meshes: THREE.Mesh[] = [];
  let vertexCount = 0;
  scene.traverse(object => {
    if (!(object instanceof THREE.Mesh)) return;
    meshes.push(object);
    vertexCount += object.geometry.index?.count ?? object.geometry.attributes.position.count;
  });
  const triangles = new Float32Array(vertexCount * 3);
  const vertex = new THREE.Vector3();
  let offset = 0;
  for (const mesh of meshes) {
    const position = mesh.geometry.getAttribute('position');
    const index = mesh.geometry.index;
    const count = index?.count ?? position.count;
    for (let i = 0; i < count; i++) {
      vertex.fromBufferAttribute(position, index ? index.getX(i) : i).applyMatrix4(mesh.matrixWorld);
      vertex.toArray(triangles, offset);
      offset += 3;
    }
  }
  return triangles;
}

export function createWarehouseScanner(triangles: Float32Array, columns: number) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(triangles, 3));
  const bvh = new MeshBVH(geometry);
  const directions = new Float32Array(LIDAR.rings * columns * 3);
  for (let ring = 0; ring < LIDAR.rings; ring++) {
    const elevation = THREE.MathUtils.degToRad(-55 + ring / (LIDAR.rings - 1) * 113);
    for (let column = 0; column < columns; column++) {
      const azimuth = column / columns * Math.PI * 2;
      const offset = (ring * columns + column) * 3;
      directions[offset] = Math.sin(azimuth) * Math.cos(elevation);
      directions[offset + 1] = Math.sin(elevation);
      directions[offset + 2] = -Math.cos(azimuth) * Math.cos(elevation);
    }
  }
  const ray = new THREE.Ray();
  const capacity = LIDAR.rings * columns * 3;

  return {
    capacity,
    scanChunk(
      pose: ScanPose,
      startRing: number,
      ringCount: number,
      samples = new Float32Array(ringCount * columns * 3),
    ) {
      const requiredLength = ringCount * columns * 3;
      if (samples.length !== requiredLength) samples = new Float32Array(requiredLength);
      ray.origin.set(pose.x, pose.y, pose.z);
      const cos = Math.cos(pose.heading);
      const sin = Math.sin(pose.heading);
      let count = 0;
      for (let localRing = 0; localRing < ringCount; localRing++) {
        const ring = (startRing + localRing) % LIDAR.rings;
        for (let column = 0; column < columns; column++) {
          const directionOffset = (ring * columns + column) * 3;
          const x = directions[directionOffset], y = directions[directionOffset + 1], z = directions[directionOffset + 2];
          ray.direction.set(cos * x + sin * z, y, -sin * x + cos * z).normalize();
          const hit = bvh.raycastFirst(ray, THREE.DoubleSide, LIDAR.near, LIDAR.range);
          if (!hit) continue;
          const sampleOffset = count * 3;
          hit.point.toArray(samples, sampleOffset);
          count++;
        }
      }
      return { samples, count };
    },
    scan(pose: ScanPose, samples = new Float32Array(capacity)) {
      return this.scanChunk(pose, 0, LIDAR.rings, samples);
    },
  };
}
