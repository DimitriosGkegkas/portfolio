import { lazy, Suspense, useState } from "react";
import { useSpring } from "@react-spring/core";
import UIManager from "./Components/UIManager";

const SceneManager = lazy(() => import("./Components/SceneManager"));

export default function App() {
  const [state, setState] = useState({ open: false, project: null as string | null });
  const [loaded, setLoaded] = useState(false);

  const props = useSpring({
    open: Number(state.open),
    position: Number(state.open ? (state.project ? 2 : 1) : 0),
    loaded: Number(loaded),
    background: Number(state.open && !state.project),
  });

  return (
    <>
      <SceneManager props={props} state={state} setState={setState} setLoaded={setLoaded} />
      <Suspense fallback={null}>
        <UIManager props={props} state={state} setState={setState} loaded={loaded} />
      </Suspense>
    </>
  );
}
