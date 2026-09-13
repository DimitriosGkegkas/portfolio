import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { asset } from '../../utils/asset';
import { LIDAR, warehouseTriangles, type ScanRequest, type ScanResponse } from './lidar/scanWarehouse';

export type PointShape = 'circle' | 'square' | 'diamond';

const POINT_SHAPE_IDS: Record<PointShape, number> = {
  circle: 0,
  square: 1,
  diamond: 2,
};

const vertexShader = `
  attribute float aTimestamp;
  attribute float aHeightT;
  uniform float uDpr;
  uniform float uTime;
  uniform float uDecaySeconds;
  uniform float uPointOpacity;
  uniform float uPointSize;
  varying float vAlpha;
  varying float vHeightT;

  void main() {
    float age = max(0.0, uTime - aTimestamp);
    float freshness = 1.0 - smoothstep(uDecaySeconds * 0.35, uDecaySeconds, age);
    vHeightT = aHeightT;
    vAlpha = uPointOpacity * freshness;

    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uPointSize * uDpr;
  }
`;

const fragmentShader = `
  uniform int uPointShape;
  varying float vAlpha;
  varying float vHeightT;

  vec3 heightColor(float heightT) {
    vec3 green = vec3(0.02, 1.00, 0.06);
    vec3 yellow = vec3(1.00, 0.90, 0.00);
    vec3 red = vec3(1.00, 0.02, 0.00);

    if (heightT < 0.50) return mix(green, yellow, smoothstep(0.0, 0.50, heightT));
    return mix(yellow, red, smoothstep(0.50, 1.0, heightT));
  }

  float pointMask(vec2 q) {
    if (uPointShape == 1) return 1.0;
    if (uPointShape == 2) {
      float diamond = abs(q.x) + abs(q.y);
      return 1.0 - smoothstep(0.78, 1.0, diamond);
    }

    return 1.0 - smoothstep(0.32, 1.0, dot(q, q));
  }

  void main() {
    vec2 q = gl_PointCoord * 2.0 - 1.0;
    float point = pointMask(q);
    if (vAlpha < 0.005 || point < 0.01) discard;

    gl_FragColor = vec4(heightColor(vHeightT), point * vAlpha);
    #include <colorspace_fragment>
  }
`;

type SensorPosition = readonly [number, number, number];

export default function WarehouseReveal({
  sensorPosition,
  sensorHeading,
  pointShape = 'circle',
}: {
  sensorPosition: SensorPosition;
  sensorHeading: number;
  pointShape?: PointShape;
}) {
  const { scene } = useGLTF(asset('robotics/warehouse.glb'));
  const { gl } = useThree();
  const mobile = useThree(state => state.size.width < 700);
  const columns = mobile ? LIDAR.mobileColumns : LIDAR.columns;
  const [scanError, setScanError] = useState<Error | null>(null);
  const scanState = useRef<{
    worker: Worker;
    ready: boolean;
    busy: boolean;
    nextRing: number;
    writeCursor: number;
    lastRequestTime: number;
    samples?: Float32Array;
  } | null>(null);

  const resources = useMemo(() => {
    const pointCapacity = LIDAR.rings * columns * LIDAR.historySweeps;
    const scanData = new Float32Array(pointCapacity * 5);
    for (let index = 0; index < pointCapacity; index++) scanData[index * 5 + 3] = -1000;
    const scanBuffer = new THREE.InterleavedBuffer(scanData, 5);
    scanBuffer.setUsage(THREE.DynamicDrawUsage);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.InterleavedBufferAttribute(scanBuffer, 3, 0));
    geometry.setAttribute('aTimestamp', new THREE.InterleavedBufferAttribute(scanBuffer, 1, 3));
    geometry.setAttribute('aHeightT', new THREE.InterleavedBufferAttribute(scanBuffer, 1, 4));
    geometry.setDrawRange(0, pointCapacity);

    const uniforms = {
      uDpr: { value: gl.getPixelRatio() },
      uTime: { value: 0 },
      uDecaySeconds: { value: LIDAR.decaySeconds },
      uPointOpacity: { value: LIDAR.pointOpacity },
      uPointSize: { value: LIDAR.pointSize },
      uPointShape: { value: POINT_SHAPE_IDS.circle },
    };
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      toneMapped: false,
    });

    return { geometry, material, scanBuffer, uniforms, pointCapacity };
  }, [columns, gl]);

  useEffect(() => () => {
    resources.geometry.dispose();
    resources.material.dispose();
  }, [resources]);

  useEffect(() => {
    const worker = new Worker(new URL('./lidar/warehouseScan.worker.ts', import.meta.url), { type: 'module' });
    const state: NonNullable<typeof scanState.current> = {
      worker,
      ready: false,
      busy: false,
      nextRing: 0,
      writeCursor: 0,
      lastRequestTime: -Infinity,
    };
    scanState.current = state;
    worker.onerror = event => setScanError(new Error(`LiDAR worker failed: ${event.message}`));
    worker.onmessage = ({ data }: MessageEvent<ScanResponse>) => {
      if (data.type === 'ready') {
        state.ready = true;
        return;
      }
      const { samples, count } = data;
      const scanData = resources.scanBuffer.array;
      const timestamp = resources.uniforms.uTime.value;
      const firstWrite = state.writeCursor;
      for (let index = 0; index < count; index++) {
        const sampleOffset = index * 3;
        const writeIndex = (state.writeCursor + index) % resources.pointCapacity;
        const writeOffset = writeIndex * 5;
        const x = samples[sampleOffset];
        const y = samples[sampleOffset + 1];
        const z = samples[sampleOffset + 2];
        scanData[writeOffset] = x;
        scanData[writeOffset + 1] = y;
        scanData[writeOffset + 2] = z;
        scanData[writeOffset + 3] = timestamp;
        scanData[writeOffset + 4] = THREE.MathUtils.clamp(
          (y - LIDAR.colorHeightMin) / (LIDAR.colorHeightMax - LIDAR.colorHeightMin),
          0,
          1,
        );
      }
      state.writeCursor = (state.writeCursor + count) % resources.pointCapacity;
      resources.scanBuffer.clearUpdateRanges();
      const firstCount = Math.min(count, resources.pointCapacity - firstWrite);
      if (firstCount > 0) resources.scanBuffer.addUpdateRange(firstWrite * 5, firstCount * 5);
      const wrappedCount = count - firstCount;
      if (wrappedCount > 0) resources.scanBuffer.addUpdateRange(0, wrappedCount * 5);
      resources.scanBuffer.needsUpdate = true;
      state.samples = samples;
      state.busy = false;
    };
    const triangles = warehouseTriangles(scene);
    worker.postMessage({ type: 'init', triangles, columns } satisfies ScanRequest, [triangles.buffer]);
    return () => {
      worker.onmessage = null;
      worker.onerror = null;
      worker.terminate();
      scanState.current = null;
    };
  }, [scene, columns, resources]);

  useFrame(({ clock }) => {
    resources.uniforms.uTime.value = clock.elapsedTime;
    resources.uniforms.uDpr.value = gl.getPixelRatio();
    resources.uniforms.uPointShape.value = POINT_SHAPE_IDS[pointShape];
    const state = scanState.current;
    if (!state?.ready || state.busy || clock.elapsedTime - state.lastRequestTime < 1 / LIDAR.batchesPerSecond) return;
    const [x, baseY, z] = sensorPosition;
    const y = baseY + LIDAR.height;
    const pose = { x, y, z, heading: sensorHeading };
    const startRing = state.nextRing;
    const ringCount = Math.min(LIDAR.batchRings, LIDAR.rings - startRing);
    const samples = state.samples;
    state.worker.postMessage(
      { type: 'scan', pose, startRing, ringCount, samples } satisfies ScanRequest,
      samples ? [samples.buffer] : [],
    );
    state.samples = undefined;
    state.nextRing = (startRing + ringCount) % LIDAR.rings;
    state.lastRequestTime = clock.elapsedTime;
    state.busy = true;
  });

  if (scanError) throw scanError;
  // Horizontal rings appear from low to high elevation; older returns fade out.
  return <points geometry={resources.geometry} material={resources.material} frustumCulled={false} renderOrder={1} />;
}
