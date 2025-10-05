import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { a as animated } from "@react-spring/three";
import { Group } from "three";
import { SpringValue, useSpring } from "@react-spring/core";
import Terminal3D from "../Terminal/Terminal";
import { useThree } from "@react-three/fiber";
import "./Laptop.css";
import { asset } from "../../utils/asset";
import { type GLTF } from "three-stdlib";
import { Light } from "../Light";

type GLTFResult = GLTF & {
  nodes: {
    Cube008: THREE.Mesh;
    Cube008_1: THREE.Mesh;
    Cube008_2: THREE.Mesh;
    keyboard: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube011_1: THREE.Mesh;
  };
  materials: {
    aluminium: THREE.MeshStandardMaterial;
    ["matte.001"]: THREE.MeshStandardMaterial;
    ["screen.001"]: THREE.MeshStandardMaterial;
    keys: THREE.MeshStandardMaterial;
    trackpad: THREE.MeshStandardMaterial;
    touchbar: THREE.MeshStandardMaterial;
    ["touchbar.001"]: THREE.MeshStandardMaterial;
  };
};

const screenOffset = 0.2;

// Responsive positioning based on window width
const getResponsivePositions = (width: number, height: number) => {
  // Adjust Z position based on screen width - move laptop further back for smaller screens
  let baseZ, projectZ;


  baseZ = -17 + (Math.max(0.9 * height - width, 0) / height) * 30;
  projectZ = baseZ;


  return {
    positionA: new THREE.Vector3(0, -4.2, 2), // closed (same for all screen sizes)
    positionB: new THREE.Vector3(0, -2.5, baseZ), // open
    positionC: new THREE.Vector3(5, -3, projectZ), // project
  };
};

const rotationA = new THREE.Euler(0, Math.PI, 0);
const rotationB = new THREE.Euler(-screenOffset, Math.PI, 0);
const rotationC = new THREE.Euler(-0.1, (Math.PI * 2.5) / 2, 0, "YXZ");

interface ModelProps {
  position: SpringValue<number>;
  state: { open: boolean; project: string | null };
  setState: React.Dispatch<React.SetStateAction<{ open: boolean; project: string | null }>>;
  onLoaded: () => void;
  onClick?: (e: React.MouseEvent) => void;
}

export default function Model({ position, state, setState, onLoaded, onClick }: ModelProps) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  const { open } = useSpring({
    open: state.open ? 1 : Number(hovered) / 15,
  });
  const { nodes, materials } = useGLTF(asset("macbook.glb")) as unknown as GLTFResult;

  const { gl } = useThree();
  useEffect(() => {
    onLoaded();
  }, [onLoaded]);

  // Update cursor on hover
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  // Apply emissive effect once when materials are ready
  const screenMaterial = useMemo(() => {
    const screenMaterial: THREE.MeshStandardMaterial = materials["screen.001"] as THREE.MeshStandardMaterial;
    screenMaterial.roughness = 111;

    return screenMaterial;
  }, [materials, nodes.Cube008_2]);

  const target = useRef<THREE.Object3D>(new THREE.Object3D());

  const testRef = useRef<THREE.Mesh>(null);

  const htmlContentref = useRef<HTMLDivElement>(null);

  const { height, width } = useThree((state) => state.size);

  // Get responsive positions based on current window width
  const positions = getResponsivePositions(width, height);

  // useFrame(() => {
  //   const div = htmlContentref.current?.children[0];
  //   if (div) {
  //     const rect = div.getBoundingClientRect();
  //     console.log("Screen Position (px):", height, width, rect.height, rect.width, rect.width / 800, rect.height / (0.555 * height));
  //   }
  // });

  return (
    <>
      <animated.group
        ref={group}
        position={position.to((p) => {
          const pos = p < 1 ? positions.positionA.clone().lerp(positions.positionB, p) : positions.positionB.clone().lerp(positions.positionC, p - 1);
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
        dispose={null}>
        <animated.group rotation-x={open.to([0, 1], [1.57, -screenOffset])} position={[0, -0.04, 0.41]}>
          <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Cube008.geometry} material={materials.aluminium} />
            <mesh geometry={nodes.Cube008_1.geometry} material={materials["matte.001"]} />
            <mesh geometry={nodes.Cube008_2.geometry} material={screenMaterial} ref={testRef}>
              {position.goal > 0.4 && gl.domElement.parentElement && (
                <Html
                  ref={htmlContentref}
                  transform
                  // occlude
                  // portal={{ current: document.getElementById("root") }}

                  position={[-3.6, 0, -2.5]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  // scale={0.5}
                  distanceFactor={3212.549 / height} // tweak this!
                  // fullscreen
                  // scale={2}
                  // scale={[0.36, 0.36, 0.36]} // ← Key for making it look sharp
                  className='content'>
                  <Terminal3D setState={setState} />
                </Html>
              )}
            </mesh>
          </group>
        </animated.group>

        <Light position={position} target={target.current} />

        <mesh geometry={nodes.keyboard.geometry} material={materials.keys} position={[1.79, 0, 3.45]} />

        <group position={[0, -0.1, 3.39]}>
          <mesh geometry={nodes.Cube002.geometry} material={materials.aluminium}>
            {/* <ContactShadows position={[0, -0.2, 0]} opacity={0.7} scale={20} blur={5} far={1000} near={0.000001} resolution={256} color='#000000' /> */}
          </mesh>
          <mesh geometry={nodes.Cube002_1.geometry} material={materials.trackpad}></mesh>
        </group>
        <group position={[0, -0.027, 1.201]} ref={target}>
          <mesh geometry={nodes.Cube011.geometry} material={materials.touchbar} />
          <mesh geometry={nodes.Cube011_1.geometry} material={materials["touchbar.001"]} />
        </group>
        <mesh
          position={[0, 0, 4]}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
          }}
          onPointerOut={() => setHovered(false)}
          onClick={onClick}>
          <boxGeometry args={[9, 0.5, 6]} />
          <meshStandardMaterial visible={false} />
        </mesh>
      </animated.group>
    </>
  );
}
