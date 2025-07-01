// components/ReturnButton.tsx
import React from "react";
import "./ReturnButton.css";

export const ReturnButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button className="return-button" onClick={onClick}>
    <svg
      viewBox="0 0 24 24"
      width="30"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-icon"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
    Return
  </button>
);
