import { Environment } from "@react-three/drei";
import { SpringValue, a as three } from "@react-spring/three";

export const Light = ({ position }: { position: SpringValue<number> }) => {
  //rgb(168, 121, 3),rgb(0, 115, 255),rgb(126, 83, 253)
  return (
    <>
      {/* Warm contrast light */}
      <three.pointLight
        position={[3, 1.5, -15]}
        intensity={400}
        distance={20}
        color={position.to([0, 1, 2], ["#f0f0f0", "rgb(255, 132, 1)", "#f0f0f0"])} // Warm golden hue
      />

      {/* Simulated saturated screen light */}
      <three.pointLight
        position={[0, 5, -15]}
        intensity={200}
        distance={18}
        color={position.to([0, 1, 2], ["#f0f0f0", "rgb(147, 190, 242)", "#99f0ff"])} // Vivid aqua / teal tones
      />

      <three.pointLight
        position={[-3, 4, -15]}
        intensity={250}
        distance={20}
        color={position.to([0, 1, 2], ["#f0f0f0", "rgb(126, 83, 253)", "#f0f0f0"])} // Warm golden hue
      />

      <Environment preset='warehouse' environmentIntensity={0.2} />
    </>
  );
};
