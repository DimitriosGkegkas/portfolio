import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

import ImageFadeMaterialDisplacementCover, { type ImageFadeMaterialDisplacementProps, ImageFadeMaterialDisplacement } from "./ImageFadeMaterialDisplacementCover.js";
import { damp } from "maath/easing";


const PaperScreen = ({ src, scaleFactor = 1, position = [0, 0, 0] }: { src: string; position: [number, number, number]; scaleFactor: number }) => {
  const [gridTexture, dispTexture] = useTexture([src, "/perlin3.jpeg"]);
  dispTexture.wrapS = dispTexture.wrapT = THREE.RepeatWrapping;

  const viewport = useThree((state) => state.viewport);
  const paperRef = useRef<THREE.Mesh>(null);

  const material = useRef<typeof ImageFadeMaterialDisplacement & ImageFadeMaterialDisplacementProps>(null);
  const { camera } = useThree();

  useFrame((_state, delta) => {
    if (!material.current) return;
    if (!paperRef.current) return;
    const vector = new THREE.Vector3();
    vector.setFromMatrixPosition(paperRef.current.matrixWorld); // get world position
    vector.project(camera); // project to NDC

    // Convert NDC Y to screen Y (top-left origin)
    const screenY = Math.min(vector.y * 0.8 + 1, 1); // Clamp to 0.8 to avoid excessive noise intensity

    damp(material.current, "noiseIntensity", 1 - screenY * 0.4, 0.1, delta);
    damp(material.current, "hole", 0.2 + screenY * 0.5, 0.1, delta);
  });

  const scale = useMemo(() => {
    const aspectRatio = gridTexture.image.width / gridTexture.image.height;
    return viewport.width / viewport.height < aspectRatio ? [(gridTexture.image.width * (viewport.height / gridTexture.image.height)) / 20, viewport.height / 20, 1.0] : [viewport.width / 20, (gridTexture.image.height * (viewport.width / gridTexture.image.width)) / 20, 1.0];
  }, [gridTexture, viewport]);

  return (
    <>
      <mesh scale={[scaleFactor * scale[0], scaleFactor * scale[1], scaleFactor * scale[2]]} position={position} rotation={[0, Math.PI, 0]} ref={paperRef}>
        <planeGeometry />
        <ImageFadeMaterialDisplacementCover dispFactor={1} ref={material} useHole={true} tex={gridTexture} disp={dispTexture} background={true} transparent={true}  holeSmoothEdges={0.3} />
      </mesh>
    </>
  );
};

export default PaperScreen;
