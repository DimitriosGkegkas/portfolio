import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { a as animated, SpringValue } from "@react-spring/three";
import { Vector3 } from "three";
import Laptop from "../Laptop/Laptop";
import { Light } from "../Light";
import { ContentManager } from "../ContentManager/ContentManager";

interface SceneManagerProps {
  props: { loaded: SpringValue<number>; position: SpringValue<number>; background: SpringValue<number>; open: SpringValue<number> };
  state: { open: boolean; project: string | null };
  setState: React.Dispatch<React.SetStateAction<{ open: boolean; project: string | null }>>;
  setLoaded: (loaded: boolean) => void;
}

export default function SceneManager({ props, state, setState, setLoaded }: SceneManagerProps) {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "hidden", zIndex: 1000 }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
        <animated.group
          position={props.loaded.to((p) => {
            const v = new Vector3(0, -10, 0).lerp(new Vector3(0, 0, 0), p);
            return [v.x, v.y, v.z] as [number, number, number];
          })}
          rotation={[0, 0, 0]}>
          <Suspense fallback={null}>
            <Laptop
              onLoaded={() => setLoaded(true)}
              hinge={props.open}
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
        <Light position={props.position} />
        <ContentManager page={state.project} />
      </Canvas>
    </div>
  );
}
