import { Html, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";
import "./StaticItemDiv.css";

interface StaticItemDivProps {
  // Position props
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  zIndex?: number;

  // Size props
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;

  // Animation props
  threshold: number; // scroll threshold (0-1) when to start showing
  hysteresis?: number; // dead zone to prevent flickering (default: 0.05)

  // Content
  children: React.ReactNode;

  // Optional styling
  className?: string;
  style?: React.CSSProperties;
}

export const StaticItemDiv: React.FC<StaticItemDivProps> = ({
  top,
  left,
  right,
  bottom,
  zIndex = 1,
  width,
  height,
  maxWidth,
  minWidth,
  threshold,
  hysteresis = 0.05,
  children,
  className = 'static-project-text',
  style = {}
}) => {
  const scroll = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useFrame(() => {
    const scrollOffset = scroll.offset;

    // Calculate thresholds with hysteresis to prevent flickering
    const showThreshold = threshold;
    const hideThreshold = threshold - hysteresis;

    // Determine if we should be visible based on current state and scroll position
    let shouldBeVisible = isVisible;

    if (!isVisible && scrollOffset >= showThreshold) {
      shouldBeVisible = true;
    } else if (isVisible && scrollOffset <= hideThreshold) {
      shouldBeVisible = false;
    }

    // Only update state if component is still mounted
    setIsVisible(shouldBeVisible);
  });

  const { gl } = useThree();

  return (
    <Html 
      portal={{ current: gl.domElement.parentElement }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: "1 !important"
      }}
    >
      <div
        className={`${className} ${isVisible ? 'visible' : 'hidden'}`}
        style={{
          position: 'absolute',
          top: typeof top === 'number' ? `${top}px` : top || 'auto',
          left: typeof left === 'number' ? `${left}px` : left || 'auto',
          right: typeof right === 'number' ? `${right}px` : right || 'auto',
          bottom: typeof bottom === 'number' ? `${bottom}px` : bottom || 'auto',
          zIndex: zIndex,
          width: typeof width === 'number' ? `${width}px` : width || 'auto',
          height: typeof height === 'number' ? `${height}px` : height || 'auto',
          maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth || 'none',
          minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth || 'none',
          pointerEvents: 'none',
          ...style
        }}
      >
        {children}
      </div>
    </Html>
  );
};