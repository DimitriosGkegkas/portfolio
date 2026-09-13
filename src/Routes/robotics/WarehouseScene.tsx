import { Component, Suspense, useEffect, useMemo, useRef, type ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Billboard, Html, Line, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { asset } from '../../utils/asset';
import { MISSION, missionSample } from './missionStory';
import PAYLOAD from './payload.json';
import WaterJet from './WaterJet';
import WarehouseReveal from './WarehouseReveal';

const FIRE = new THREE.Vector3(...MISSION.fire);
const UP = new THREE.Vector3(0, 1, 0);
const HOSE_POINT_COUNT = 11;
const HOSE_SEGMENT_COUNT = HOSE_POINT_COUNT - 1;
type EmberParticle = {
  x: number;
  y: number;
  z: number;
  drift: number;
  speed: number;
  phase: number;
};

const EMBER_PARTICLES: EmberParticle[] = Array.from({ length: 72 }, (_, i) => {
  const angle = i * 2.399963;
  const radius = 0.08 + ((i * 17) % 100) / 100 * 0.34;
  return {
    x: Math.cos(angle) * radius,
    y: ((i * 37) % 100) / 100 * 0.72,
    z: Math.sin(angle) * radius,
    drift: 0.035 + ((i * 13) % 100) / 100 * 0.09,
    speed: 0.28 + ((i * 29) % 100) / 100 * 0.5,
    phase: ((i * 47) % 100) / 100,
  };
});

function FireEmbers({ scale, reduced }: { scale: number; reduced: boolean }) {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.PointsMaterial>(null);
  const geometry = useMemo(() => {
    const positions = new Float32Array(EMBER_PARTICLES.length * 3);
    const colors = new Float32Array(EMBER_PARTICLES.length * 3);
    const emberColors = [new THREE.Color("#ffb347"), new THREE.Color("#ff6a1a"), new THREE.Color("#ffe08a")];

    EMBER_PARTICLES.forEach((ember, i) => {
      positions[i * 3] = ember.x;
      positions[i * 3 + 1] = ember.y;
      positions[i * 3 + 2] = ember.z;
      emberColors[i % emberColors.length].toArray(colors, i * 3);
    });

    const result = new THREE.BufferGeometry();
    result.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    result.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return result;
  }, []);

  useFrame(({ clock }) => {
    if (!points.current || !material.current) return;

    const positions = geometry.getAttribute("position") as THREE.BufferAttribute;
    const time = clock.elapsedTime;
    if (reduced) {
      material.current.opacity = scale * 0.65;
      points.current.visible = scale > 0.01;
      return;
    }

    EMBER_PARTICLES.forEach((ember, i) => {
      const cycle = (time * ember.speed + ember.phase) % 1;
      const rise = cycle * 1.15;
      positions.setXYZ(
        i,
        ember.x + Math.sin(time * 1.5 + ember.phase * 8) * ember.drift * cycle,
        ember.y + rise,
        ember.z + Math.cos(time * 1.2 + ember.phase * 7) * ember.drift * cycle,
      );
    });
    positions.needsUpdate = true;
    material.current.opacity = scale * 0.9;
    points.current.visible = scale > 0.01;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        ref={material}
        size={0.075}
        vertexColors
        transparent
        opacity={0}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        toneMapped={false}
      />
    </points>
  );
}

function Model({ file, shadows = true, travel = 0 }: { file: string; shadows?: boolean; travel?: number }) {
  const { scene } = useGLTF(asset(`robotics/${file}.glb`));
  const model = useMemo(() => {
    const copy = scene.clone(true);
    copy.traverse(o => {
      if (o instanceof THREE.Mesh) { o.castShadow = shadows; o.receiveShadow = true; }
    });
    const pivots: THREE.Group[] = [];
    if (file === 'm20') {
      const wheels: THREE.Mesh[] = [];
      copy.traverse(o => { if (o instanceof THREE.Mesh && o.name.includes('wheel')) wheels.push(o); });
      wheels.forEach(wheel => {
        wheel.geometry.computeBoundingBox();
        const center = wheel.geometry.boundingBox!.getCenter(new THREE.Vector3());
        const pivot = new THREE.Group(); pivot.position.copy(center);
        wheel.parent!.add(pivot); pivot.add(wheel); wheel.position.sub(center); pivots.push(pivot);
      });
    }
    return { copy, pivots };
  }, [scene, shadows, file]);
  useFrame(() => { model.pivots.forEach(pivot => { pivot.rotation.x = -travel / .17; }); });
  return <primitive object={model.copy} />;
}

function Robot({ progress, responder = false }: { progress: number; responder?: boolean }) {
  const sample = missionSample(progress);
  const pos = responder ? sample.responder : sample.robot;
  const heading = responder ? THREE.MathUtils.smoothstep(progress, .62, .8) * .32 : robotHeading(progress);
  return <group position={pos} rotation={[0, heading, 0]} visible={!responder || progress > .13}>
    <Model file="m20" travel={(responder ? 5.4 : 4) - pos[2]} />
    <Model file={responder ? 'cannon-payload' : 'camera-payload'} />
  </group>;
}

function robotHeading(progress: number) {
  return THREE.MathUtils.smoothstep(progress, .24, .4) * -.26;
}

function Hose({ progress, responder }: { progress: number; responder: [number, number, number] }) {
  const group = useRef<THREE.Group>(null);
  const segments = useRef<(THREE.Mesh | null)[]>([]);
  const geometry = useMemo(() => new THREE.CylinderGeometry(.04, .04, 1, 8), []);
  const material = useMemo(() => new THREE.MeshStandardMaterial({ color: '#943d25', roughness: .75 }), []);
  const points = useMemo(() => Array.from({ length: HOSE_POINT_COUNT }, () => new THREE.Vector3()), []);
  const start = useMemo(() => new THREE.Vector3(3.1, .06, 8), []);
  const inlet = useMemo(() => new THREE.Vector3(), []);
  const pointA = useMemo(() => new THREE.Vector3(), []);
  const pointB = useMemo(() => new THREE.Vector3(), []);
  const direction = useMemo(() => new THREE.Vector3(), []);

  useEffect(() => () => {
    geometry.dispose();
    material.dispose();
  }, [geometry, material]);

  useFrame(() => {
    if (!group.current) return;

    group.current.visible = progress > .14;
    if (!group.current.visible) return;

    const heading = THREE.MathUtils.smoothstep(progress, .62, .8) * .32;
    inlet.set(PAYLOAD.inlet[0], PAYLOAD.inlet[1], PAYLOAD.inlet[2]).applyAxisAngle(UP, heading);
    inlet.x += responder[0];
    inlet.z += responder[2];

    for (let i = 0; i < 8; i++) {
      const t = i / 7;
      const z = THREE.MathUtils.lerp(start.z, inlet.z + .65, t);
      const x = THREE.MathUtils.lerp(start.x, inlet.x, t) + Math.sin(t * Math.PI * 3) * .17 * Math.sin(t * Math.PI);
      points[i].set(x, .06, z);
    }
    points[8].set(inlet.x, .65, inlet.z + .35);
    points[9].set(inlet.x, inlet.y, inlet.z + .18);
    points[10].copy(inlet);

    segments.current.forEach((segment, i) => {
      if (!segment) return;
      pointA.copy(points[i]);
      pointB.copy(points[i + 1]);
      direction.subVectors(pointB, pointA);
      const length = direction.length();
      segment.position.lerpVectors(pointA, pointB, .5);
      segment.quaternion.setFromUnitVectors(UP, direction.normalize());
      segment.scale.set(1, length, 1);
    });
  });

  return <group ref={group} visible={false}>
    {Array.from({ length: HOSE_SEGMENT_COUNT }, (_, index) => (
      <mesh
        key={index}
        ref={(node) => { segments.current[index] = node; }}
        geometry={geometry}
        material={material}
      />
    ))}
  </group>;
}

function FireWarning({ progress, reduced }: { progress: number; reduced: boolean }) {
  const marker = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!marker.current) return;
    const enter = THREE.MathUtils.smoothstep(progress, .17, .2);
    const exit = 1 - THREE.MathUtils.smoothstep(progress, .35, .38);
    const visibleScale = enter * exit;
    marker.current.visible = visibleScale > .001;
    const overshoot = 1 + Math.sin(enter * Math.PI) * .18;
    const pulse = reduced ? 1 : 1 + Math.sin(clock.elapsedTime * 5) * .045;
    marker.current.scale.setScalar(visibleScale * overshoot * pulse);
    marker.current.position.y = reduced ? 0 : Math.sin(clock.elapsedTime * 2.4) * .045;
  });

  return <Billboard position={[FIRE.x, 2.25, FIRE.z]}>
    <group ref={marker} visible={false}>
      <mesh renderOrder={4}>
        <circleGeometry args={[.44, 3, Math.PI / 2]} />
        <meshBasicMaterial color="#ff3038" toneMapped={false} depthTest={false} />
      </mesh>
      <mesh position={[0, 0, .012]} renderOrder={5}>
        <circleGeometry args={[.34, 3, Math.PI / 2]} />
        <meshBasicMaterial color="#260609" toneMapped={false} depthTest={false} />
      </mesh>
      <mesh position={[0, .035, .025]} renderOrder={6}>
        <planeGeometry args={[.075, .23]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} depthTest={false} />
      </mesh>
      <mesh position={[0, -.145, .025]} renderOrder={6}>
        <circleGeometry args={[.047, 20]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} depthTest={false} />
      </mesh>
    </group>
  </Billboard>;
}

function MissionEffects({ progress, reduced }: { progress: number; reduced: boolean }) {
  const flame = useRef<THREE.Group>(null);
  const fireLight = useRef<THREE.PointLight>(null);
  const { robot, responder } = missionSample(progress);
  const suppression = THREE.MathUtils.smoothstep(progress, .77, .89);
  const fireScale = 1 - suppression * .93;
  const water = useMemo(() => {
    const nozzle = new THREE.Vector3(...PAYLOAD.nozzle).applyAxisAngle(UP, .32).add(new THREE.Vector3(1.5, 0, -7.6));
    const direction = new THREE.Vector3(...PAYLOAD.direction).applyAxisAngle(UP, .32);
    const launch = nozzle.clone().addScaledVector(direction, 1.2);
    const landing = FIRE.clone().add(new THREE.Vector3(0, .65, .35));
    return new THREE.CubicBezierCurve3(nozzle, launch, landing, FIRE);
  }, []);
  useFrame(({ clock }) => {
    if (flame.current) {
      flame.current.scale.y = fireScale * (reduced ? 1 : 1 + Math.sin(clock.elapsedTime * 6) * .08);
      flame.current.scale.x = fireScale;
      flame.current.scale.z = fireScale;
    }
    if (fireLight.current) fireLight.current.intensity = progress < .145 ? 0 : 9 * fireScale;
  });
  return <>
    <Hose progress={progress} responder={responder} />
    <group position={[FIRE.x, .24, FIRE.z]} ref={flame}>
      {Array.from({ length: 7 }, (_, i) => <mesh key={i} position={[Math.sin(i * 2.4) * .28, .35 + (i % 3) * .1, Math.cos(i * 2.4) * .28]} rotation={[.1 * Math.cos(i), i, .15 * Math.sin(i)]}>
        <coneGeometry args={[.14 + (i % 2) * .05, .65 + (i % 3) * .18, 5]} />
        <meshStandardMaterial color={i % 2 ? '#ff993a' : '#e8551b'} emissive={i % 2 ? '#ff862d' : '#e7410e'} emissiveIntensity={2} roughness={1} />
      </mesh>)}
      <FireEmbers scale={fireScale} reduced={reduced} />
    </group>
    <pointLight ref={fireLight} position={[FIRE.x, 1.2, FIRE.z]} color="#ff7e30" intensity={9} distance={7} decay={2} />
    <FireWarning progress={progress} reduced={reduced} />

    {progress > .17 && progress < .57 &&
      <Suspense fallback={null}>
        <Line points={[[robot[0], 1.27, robot[2] - .25], [FIRE.x, .65, FIRE.z]]} color="#e0a475" transparent opacity={.6} lineWidth={1} dashed dashSize={.12} gapSize={.12} />
        <mesh position={[FIRE.x, .65, FIRE.z]}><boxGeometry args={[1.45, 1.3, 1.4]} /><meshBasicMaterial color={progress < .23 ? '#e4a67b' : '#98c7bf'} wireframe transparent opacity={.5} /></mesh>
      </Suspense>
    }
    {progress > .54 && progress < .6 &&
      <Suspense fallback={null}>
        <group>
          <Line points={[[-1.5, 0.2, -7 + 0 * 0.9], [FIRE.x, .65, FIRE.z]]} color="#ffffff" transparent opacity={0.5} lineWidth={4} />
          <mesh position={[-1.5, 0.2, -7 + 0 * 0.9]} rotation={[-Math.PI / 2, 0, 0]}><ringGeometry args={[.13, .17, 24]} /><meshBasicMaterial color="#ffffff" opacity={0.5} transparent /></mesh>
        </group>
      </Suspense>
    }
    {progress > .48 && progress < .6 &&
      <Suspense fallback={null}>
        <group>
          <Line points={[[-1, 0.2, -7 + 1 * 0.9], [FIRE.x, .65, FIRE.z]]} color="#ffffff" transparent opacity={0.5} lineWidth={4} />
          <mesh position={[-1, 0.2, -7 + 1 * 0.9]} rotation={[-Math.PI / 2, 0, 0]}><ringGeometry args={[.13, .17, 24]} /><meshBasicMaterial color="#ffffff" opacity={0.5} transparent /></mesh>
        </group>
      </Suspense>
    }
    {progress > .34 && progress < .6 &&
      <Suspense fallback={null}>
        <group>
          <Line points={[[-0.5, 0.2, -7 + 2 * 0.9], [FIRE.x, .65, FIRE.z]]} color="#ffffff" transparent opacity={0.5} lineWidth={4} />
          <mesh position={[-0.5, 0.2, -7 + 2 * 0.9]} rotation={[-Math.PI / 2, 0, 0]}><ringGeometry args={[.13, .17, 24]} /><meshBasicMaterial color="#ffffff" opacity={0.5} transparent /></mesh>
        </group>
      </Suspense>
    }
    {progress > .49 && progress < .69 &&
      <Suspense fallback={null}>
        <Line points={[[robot[0], 1.35, robot[2]], [robot[0] + 1, 2.8, robot[2] + 1], [responder[0], 1.5, responder[2]]]} color="#9fc8c7" lineWidth={1.4} dashed dashSize={.12} gapSize={.12} />
      </Suspense>
    }
    {progress > .73 && progress < .93 &&
      <Suspense fallback={null}>
        <WaterJet curve={water} progress={progress} reduced={reduced} />
      </Suspense>
    }
  </>;
}

function Camera({ progress }: { progress: number }) {
  const { camera, size } = useThree();
  useFrame(() => {
    const f = missionSample(progress);
    const mobile = size.width < 700;
    camera.position.set(...f.camera);
    // Lift the visual into the upper half on narrow screens, above the reading panel.
    if (mobile) { camera.position.y += 2; camera.position.z += 3; }
    camera.lookAt(f.target[0] + (mobile ? 2 : 0), f.target[1] + (mobile ? -2.4 : 0), f.target[2]);
  });
  return null;
}

function World({ progress, reduced }: { progress: number; reduced: boolean }) {
  const { robot } = missionSample(progress);
  const heading = robotHeading(progress);

  return <>
    <color attach="background" args={['#05090c']} />
    <fog attach="fog" args={['#0b1014', 17, 43]} />
    <hemisphereLight args={['#d3e5f2', '#333b42', 1.7]} />
    <directionalLight position={[2, 9, 5]} color="#d7e8f6" intensity={2.6} castShadow shadow-mapSize={[1024, 1024]} shadow-camera-left={-12} shadow-camera-right={12} shadow-camera-top={12} shadow-camera-bottom={-18} shadow-normalBias={.03} />
    {[4, -2, -8, -14].map(z => <pointLight key={z} position={[0, 5.3, z]} color="#bed8e7" intensity={28} distance={12} decay={2} />)}
    <Suspense fallback={<Html center><div className="mission-loading">Preparing the mission…</div></Html>}>
      <Robot progress={progress} /><Robot progress={progress} responder />
    </Suspense>
    <Suspense fallback={<Html center><div className="mission-loading">Preparing the mission…</div></Html>}>
      <WarehouseReveal sensorPosition={robot} sensorHeading={heading} />
      <MissionEffects progress={progress} reduced={reduced} />
    </Suspense>
    <Camera progress={progress} />
  </>;
}

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <div className="mission-fallback">The 3D scene could not load. You can still explore the project below.</div> : this.props.children; }
}

export default function WarehouseScene({ progress, reduced }: { progress: number; reduced: boolean }) {
  return <SceneBoundary><Canvas className="robotics-page__canvas" shadows dpr={[1, 1.5]} camera={{ position: [3.2, 3.2, 8.5], fov: 44, near: .1, far: 65 }} gl={{ antialias: true, alpha: false }} fallback={<div className="mission-fallback">Explore the project by scrolling.</div>}>
    <World progress={progress} reduced={reduced} />
    {/* <Perf /> */}
  </Canvas></SceneBoundary>;
}
