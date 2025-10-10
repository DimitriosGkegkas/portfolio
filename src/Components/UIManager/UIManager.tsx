import React, { useEffect, useState } from "react";
import { SpringValue, useSpring, a as web } from "@react-spring/web";
import "./UIManager.css";
import Menu from "../Menu";
import DimitriosName from "./DimitriosName";

interface UIManagerProps {
  props: { loaded: SpringValue<number>; position: SpringValue<number>; background: SpringValue<number>; open: SpringValue<number> };
  state: { open: boolean; project: string | null };
  setState: React.Dispatch<React.SetStateAction<{ open: boolean; project: string | null }>>;
  loaded: boolean;
}

export default function UIManager({ props, state, setState, loaded }: UIManagerProps) {
  const [show, setShow] = useState(false);

  const { appear } = useSpring({
    appear: show ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    setShow(true); // Triggers appear to go from 0 -> 1 once on mount
  }, []);

  useEffect(() => {
    if (state.open && !state.project) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [state.open, state.project]);

  return (
    <web.main
      className='main-container'
      style={{
        background: props.background.to([0, 1], ["linear-gradient(90deg, #f0f0f0, #f0f0f0)", "linear-gradient(-30deg, rgb(4, 8, 46) ,rgb(25, 12, 2) )"]),
        overflow: "hidden",
        opacity: appear,
      }}>
      <Menu state={state} setState={setState} loaded={loaded} open={props.open} />
      <web.h1
        className='welcome-heading'
        style={{
          opacity: props.open.to([0, 1], [1, 0]),
          transform: props.open.to((o: number) => `translate3d(-50%,${o * 100 - 200}px,0)`),
        }}>
        👋 Welcome <br />I am <DimitriosName />
      </web.h1>
    </web.main>
  );
}
