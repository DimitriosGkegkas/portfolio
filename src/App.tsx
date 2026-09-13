import { lazy, Suspense, useEffect, useState } from "react";
import { useSpring } from "@react-spring/core";
import UIManager from "./Components/UIManager";
import RoboticsRoute from "./Routes/RoboticsRoute";
import { isRoboticsImmersiveProject } from "./Data/portfolioData";

const SceneManager = lazy(() => import("./Components/SceneManager"));

const getBasePath = () => {
  const baseUrl = new URL(import.meta.env.BASE_URL, window.location.origin).pathname.replace(/\/$/, "");
  return baseUrl || "/";
};

const getRoutePath = () => {
  const basePath = getBasePath();
  let pathname = window.location.pathname;

  if (basePath !== "/" && pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length) || "/";
  }

  if (!pathname.startsWith("/")) {
    pathname = `/${pathname}`;
  }

  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
};

function PortfolioHome() {
  const [state, setState] = useState({ open: false, project: null as string | null });
  const [loaded, setLoaded] = useState(false);
  const isRoboticsExperience = isRoboticsImmersiveProject(state.project);

  const props = useSpring({
    open: Number(state.open),
    position: Number(state.open ? (state.project ? (isRoboticsExperience ? 3 : 2) : 1) : 0),
    loaded: Number(loaded),
    background: Number(state.open && !state.project),
    config: { mass: 1, tension: 25, friction: 10 },
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

export default function App() {
  const [routePath, setRoutePath] = useState(() => getRoutePath());

  useEffect(() => {
    const handlePopState = () => {
      setRoutePath(getRoutePath());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  if (routePath === "/robotics") {
    return <RoboticsRoute />;
  }

  return <PortfolioHome />;
}
