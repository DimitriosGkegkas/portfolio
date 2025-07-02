import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { a as animated, SpringValue } from "@react-spring/three";
import { useSpring, a as web } from "@react-spring/web";
import { Vector3 } from "three";
import Laptop from "../Laptop/Laptop";
import { ContentManager } from "../ContentManager/ContentManager";
import { PerspectiveCamera } from "@react-three/drei";

interface SceneManagerProps {
  props: { loaded: SpringValue<number>; position: SpringValue<number>; background: SpringValue<number>; open: SpringValue<number> };
  state: { open: boolean; project: string | null };
  setState: React.Dispatch<React.SetStateAction<{ open: boolean; project: string | null }>>;
  setLoaded: (loaded: boolean) => void;
}

export default function SceneManager({ props, state, setState, setLoaded }: SceneManagerProps) {
  const { getContent } = useSpring({
    getContent: state.project ? 1 : 0,
    config: { mass: 1, tension: 25, friction: 10 },
  });
  return (
    <>
      <Canvas id='scene' dpr={[1, 2]} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", zIndex: 1000 }}>
        <PerspectiveCamera makeDefault position={[0, 0, -30]} fov={35} rotation={[0, Math.PI, 0]}></PerspectiveCamera>
        <animated.group
          position={props.loaded.to((p) => {
            const v = new Vector3(0, 0, -20).lerp(new Vector3(0, 0, 0), p);
            return [v.x, v.y, v.z] as [number, number, number];
          })}
          rotation={[0, 0, 0]}>
          <Suspense fallback={null}>
            <Laptop
              onLoaded={() => setLoaded(true)}
              state={state}
              position={props.position}
              setState={setState}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setState((prev) => ({
                  ...prev,
                  open: prev.project ? prev.open : !prev.open,
                  project: null,
                }));
              }}
            />
          </Suspense>
        </animated.group>
      </Canvas>
      <web.div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 1001,
          pointerEvents: "auto",
          transform: getContent.to((o: number) => `translate3d(0,${(1 - o) * 100}vh,0)`),
        }}>
        <Canvas id='content' dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, -30]} fov={35} rotation={[0, Math.PI, 0]}></PerspectiveCamera>
          <ContentManager page={state.project} />
        </Canvas>
      </web.div>
    </>
  );
}
