import React from "react";
import "./EnterButton.css";
import type { SpringValue } from "@react-spring/core";
import { a as web } from "@react-spring/web";

export const EnterButton: React.FC<{ onClick?: () => void; open: SpringValue<number> }> = ({ onClick, open }) => (
  <web.div
    className='animated-border-wrapper'
    style={{
      opacity: open.to([0, 1], [1, 0]),
      transform: open.to((o) => `translate3d(-50%,${o * 100}px,0)`),
      zIndex: 100000000,
    }}>
    <button className='open-laptop-button' onClick={onClick}>
      Open My Laptop
    </button>
  </web.div>
);
