import * as THREE from "three";
import { Mesh } from 'three';
import { useRef, useState } from "react";
import { useIntersect, Image } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

interface ItemProps {
  url: string;
  scale: [number, number] | number;
  position: [number, number, number];
}

export const Item: React.FC<ItemProps> = ({ url, scale, position }) => {
  const visible = useRef(false);
  const [, setHovered] = useState(false);
  const ref = useIntersect<Mesh & { material: THREE.Material }>((isVisible) => {
    visible.current = isVisible;
  });

  const { height } = useThree((state) => state.viewport);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta);
    ref.current.material.toneMapped = false;
    // ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, hovered ? 1 : 0, 4, delta);
  });

  return (
    <group position={position} rotation={[0, Math.PI, 0]}>
      <Image zoom={0.5} ref={ref} url={url} scale={scale} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} material-toneMapped={false} transparent material-depthWrite={false} material-depthTest={false} />
    </group>
  );
};
