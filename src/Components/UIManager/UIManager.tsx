import React from "react";
import { SpringValue, a as web } from "@react-spring/web";
import "./UIManager.css";
import Menu from "../Menu";

interface UIManagerProps {
  props: { loaded: SpringValue<number>; position: SpringValue<number>; background: SpringValue<number>; open: SpringValue<number> };
  state: { open: boolean; project: string | null };
  setState: React.Dispatch<React.SetStateAction<{ open: boolean; project: string | null }>>;
  loaded: boolean;
}

export default function UIManager({ props, state, setState, loaded }: UIManagerProps) {
  return (
    <web.main
      className='main-container'
      style={{
        background: props.background.to([0, 1], ["#f0f0f0", "rgb(4, 5, 9)"]),
        overflow: "hidden",
      }}>
      <Menu state={state} setState={setState} loaded={loaded} open={props.open} />
      <web.h1
        className='welcome-heading'
        style={{
          opacity: props.open.to([0, 1], [1, 0]),
          transform: props.open.to((o: number) => `translate3d(-50%,${o * 100 - 200}px,0)`),
        }}>
        👋 Welcome <br />I am <span className='highlight-name'>Dimitrios</span>
      </web.h1>
    </web.main>
  );
}
