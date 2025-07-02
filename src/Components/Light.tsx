import { SpringValue, a as three } from "@react-spring/three";
import * as THREE from "three";

export const Light = ({ position, target }: { position: SpringValue<number>; target?: THREE.Object3D }) => {
  //rgb(168, 121, 3),rgb(0, 115, 255),rgb(126, 83, 253)
  return (
    <>
      {/* Warm contrast light */}
      <three.spotLight
        position={[-10, 10, -2]}
        angle={0.6}
        penumbra={0.5}
        target={target}
        intensity={position.to([0, 1, 2], [200, 400, 400])} // Adjusted intensity based on position
        distance={20}
        color={position.to([0, 1, 2], ["rgb(255, 255, 255)", "rgb(255, 132, 1)", "#f0f0f0"])} // Warm golden hue
      />

      {/* Simulated saturated screen light */}
      <three.spotLight
        position={[0, 10, -2]}
        angle={0.6}
        penumbra={0.5}
        target={target}
        intensity={position.to([0, 1, 2], [200, 400, 400])} // Adjusted intensity based on position
        color={position.to([0, 1, 2], ["rgb(255, 255, 255)", "rgb(147, 190, 242)", "#99f0ff"])} // Vivid aqua / teal tones
      />

      <three.spotLight
        position={[10, 10, -2]}
        angle={0.6}
        penumbra={0.5}
        target={target}
        intensity={position.to([0, 1, 2], [500, 200, 200])} // Adjusted intensity based on position

        color={position.to([0, 1, 2], ["rgb(255, 255, 255)", "rgb(126, 83, 253)", "#f0f0f0"])} // Warm golden hue
      />

      <three.spotLight
        position={[0, 5, 10]}
        angle={0.8}
        penumbra={1.9}
        target={target}
        intensity={100}

        color={"#f0f0f0"} // Warm golden hue
      />

      {/* <Environment preset='warehouse' environmentIntensity={0.1} /> */}
    </>
  );
};
