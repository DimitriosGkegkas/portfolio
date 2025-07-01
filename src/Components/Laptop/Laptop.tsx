import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { ContactShadows, Html, useGLTF } from "@react-three/drei";
import { a as animated } from "@react-spring/three";
import { Group, Mesh, Material } from "three";
import { SpringValue } from "@react-spring/core";
import Terminal3D from "../Terminal/Terminal";
import { useThree } from "@react-three/fiber";
import "./Laptop.css";
import { asset } from "../../utils/asset";

type GLTFResult = {
  nodes: {
    Cube008: Mesh;
    Cube008_1: Mesh;
    Cube008_2: Mesh;
    Cube002: Mesh;
    Cube002_1: Mesh;
    keyboard: Mesh;
    touchbar: Mesh;
  };
  materials: {
    aluminium: Material;
    "matte.001": Material;
    "screen.001": Material;
    keys: Material;
    trackpad: Material;
    touchbar: Material;
  };
};

const positionA = new THREE.Vector3(0, -4.2, 2); // closed
const positionB = new THREE.Vector3(0, -2.5, -17); // open
const positionC = new THREE.Vector3(15, -10, -17); // project

const rotationA = new THREE.Euler(0, Math.PI, 0);
const rotationB = new THREE.Euler(-0.2, Math.PI, 0);
const rotationC = new THREE.Euler(-0.1, (Math.PI * 3) / 2, 0, "YXZ");

interface ModelProps {
  hinge: SpringValue<number>;
  position: SpringValue<number>;
  setState: React.Dispatch<React.SetStateAction<{ open: boolean; project: string | null }>>;
  onLoaded: () => void;
  onClick?: (e: React.MouseEvent) => void;
}

export default function Model({ hinge, position, setState, onLoaded, onClick }: ModelProps) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  const { nodes, materials } = useGLTF(asset("/mac-draco.glb")) as unknown as GLTFResult;

  const { gl } = useThree();
  useEffect(() => {
    onLoaded();
  }, [onLoaded]);

  // Update cursor on hover
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  // Apply emissive effect once when materials are ready
  useEffect(() => {
    const screenMaterial: THREE.MeshStandardMaterial | undefined = materials["screen.001"] as THREE.MeshStandardMaterial | undefined;
    if (screenMaterial) {
      screenMaterial.emissiveIntensity = 1;
      screenMaterial.emissive = new THREE.Color(0xffffff); // Optional, but helps glow stand out
      screenMaterial.emissiveMap = screenMaterial.map;
      screenMaterial.toneMapped = false; // Disable tone mapping for emissive effect
      screenMaterial.needsUpdate = true;
      // Set full emissive so lighting doesn’t matter visually
      screenMaterial.color.set(0x000000);
      screenMaterial.toneMapped = false;
      screenMaterial.needsUpdate = true;

      nodes.Cube008_2.material = new THREE.MeshBasicMaterial({
        map: (materials["screen.001"] as THREE.MeshStandardMaterial).map,
      });
    }
  }, [materials, nodes.Cube008_2]);

  return (
    <>
      <ContactShadows opacity={0.6} position={[0, -4.7, 0]} scale={200} blur={1} far={10000} near={0.01} resolution={256} color='black' />
      <animated.group
        ref={group}
        onClick={onClick}
        position={position.to((p) => {
          const pos = p < 1 ? positionA.clone().lerp(positionB, p) : positionB.clone().lerp(positionC, p - 1);
          return [pos.x, pos.y, pos.z] as [number, number, number];
        })}
        rotation-x={position.to((p) => {
          const from = p < 1 ? rotationA : rotationB;
          const to = p < 1 ? rotationB : rotationC;
          const t = p < 1 ? p : p - 1;
          const fromVec = new THREE.Vector3().setFromEuler(from);
          const toVec = new THREE.Vector3().setFromEuler(to);
          const result = fromVec.lerp(toVec, t);
          return result.x;
        })}
        rotation-y={position.to((p) => {
          const from = p < 1 ? rotationA : rotationB;
          const to = p < 1 ? rotationB : rotationC;
          const t = p < 1 ? p : p - 1;
          const fromVec = new THREE.Vector3().setFromEuler(from);
          const toVec = new THREE.Vector3().setFromEuler(to);
          const result = fromVec.lerp(toVec, t);
          return result.y;
        })}
        rotation-z={position.to((p) => {
          const from = p < 1 ? rotationA : rotationB;
          const to = p < 1 ? rotationB : rotationC;
          const t = p < 1 ? p : p - 1;
          const fromVec = new THREE.Vector3().setFromEuler(from);
          const toVec = new THREE.Vector3().setFromEuler(to);
          const result = fromVec.lerp(toVec, t);
          return result.z;
        })}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        dispose={null}>
        <animated.group rotation-x={hinge.to([0, 1], [1.575, -0.225])} position={[0, -0.04, 0.41]}>
          <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Cube008.geometry} material={materials.aluminium} />
            <mesh geometry={nodes.Cube008_1.geometry} material={materials["matte.001"]} />
            <mesh geometry={nodes.Cube008_2.geometry} material={nodes.Cube008_2.material}>
              {position.goal > 0.4 && gl.domElement.parentElement && (
                <Html
                  transform
                  portal={{ current: gl.domElement.parentElement }}
                  position={[0.8, 0, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.35, 0.35, 0.35]} // ← Key for making it look sharp
                  className='content'>
                  <Terminal3D setState={setState} />
                </Html>
              )}
            </mesh>
          </group>
        </animated.group>

        <mesh geometry={nodes.keyboard.geometry} material={materials.keys} position={[1.79, 0, 3.45]} />

        <group position={[0, -0.1, 3.39]}>
          <mesh geometry={nodes.Cube002.geometry} material={materials.aluminium} />
          <mesh geometry={nodes.Cube002_1.geometry} material={materials.trackpad} />
        </group>
        <mesh geometry={nodes.touchbar.geometry} material={materials.touchbar} position={[0, -0.03, 1.2]} />
      </animated.group>
    </>
  );
}
