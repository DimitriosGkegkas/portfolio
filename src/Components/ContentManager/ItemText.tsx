import { Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";

interface ItemTextProps {
  text: string;
  position: [number, number, number];
  scale: number;
  color?: string;
}

export const ItemText: React.FC<ItemTextProps> = ({ text, position, scale, color }) => {
  const ref = React.useRef<THREE.Mesh>(null);
  const { camera, size } = useThree();

  useFrame(() => {
    if (!ref.current) return;

    const vector = new THREE.Vector3();
    vector.setFromMatrixPosition(ref.current.matrixWorld); // get world position
    vector.project(camera); // project to NDC

    // Convert NDC Y to screen Y (top-left origin)
    const screenY = (1 - (vector.y * 0.5 + 0.5));

    ref.current.material.opacity = 1.3 - 2*Math.abs(screenY); // Fade out based on screen Y position

    // console.log(`Text "${text}" is at screen Y:`, screenY.toFixed(2));
  });

  return (
    <Text
      ref={ref}
      scale={scale}
      position={position}
      color={color || "black"}
      fontSize={1}
      rotation={[0, Math.PI, 0]}
      anchorX="center"
      anchorY="middle"
      outlineBlur={0.0}
      outlineColor="black"
      outlineWidth={0}
      lineHeight={1}
      material-toneMapped={false}
      material-transparent={true}
      material-opacity={1}
    >
      {text}
    </Text>
  );
};
