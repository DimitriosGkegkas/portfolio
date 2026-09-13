import { lazy, Suspense, useEffect, useState } from "react";
import { useSpring } from "@react-spring/core";
import UIManager from "./Components/UIManager";
import RoboticsRoute from "./Routes/RoboticsRoute";
import { getProjectByHash, getProjectById, isRoboticsImmersiveProject } from "./Data/portfolioData";

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
  const [state, setState] = useState(() => {
    const projectParam = new URLSearchParams(window.location.search).get("project");
    const project = projectParam
      ? getProjectById(projectParam) ?? getProjectByHash(projectParam)
      : undefined;

    return {
      open: Boolean(project),
      project: project?.id ?? null,
    };
  });
  const [loaded, setLoaded] = useState(false);
  const isRoboticsExperience = isRoboticsImmersiveProject(state.project);

  useEffect(() => {
    const url = new URL(window.location.href);
    const project = state.project ? getProjectById(state.project) : undefined;

    if (project) {
      url.searchParams.set("project", project.hash);
    } else {
      url.searchParams.delete("project");
    }

    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }, [state.project]);

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
