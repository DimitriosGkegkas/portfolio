import { useRef, useEffect, useState, type ReactNode } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useWindowManager } from "../WindowManager/WindowManager";
import Window from "./Window";
import "./DraggableWindow.css";

interface DraggableWindowProps {
  children: ReactNode;
  menuButtons?: Array<{
    label: string;
    onClick: () => void;
  }>;
  className?: string;
  windowId: string;
}

const DraggableWindow = ({
  children,
  menuButtons = [],
  className = "",
  windowId,
}: DraggableWindowProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [spring, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { tension: 300, friction: 30 }
  }));
  const dragStart = useRef({ x: 0, y: 0 });

  const { bringToFront, getZIndex, isWindowVisible, closeWindow, expanded } = useWindowManager();
  const isVisible = isWindowVisible(windowId);

  useEffect(() => {
    console.log('expanded', expanded);
    api.start({ x: 0, y: 0 });
    setIsDragging(false);
  }, [expanded, api]);

  const handleMouseMove = (e: MouseEvent) => {
  
    // Calculate delta from last position
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    
    api.start({
      x: spring.x.get() + dx,
      y: spring.y.get() + dy,
      immediate: true
    });
    
    // Update dragStart for next move
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    
    // Calculate delta from last position
    const dx = touch.clientX - dragStart.current.x;
    const dy = touch.clientY - dragStart.current.y;
    
    api.start({
      x: spring.x.get() + dx,
      y: spring.y.get() + dy,
      immediate: true
    });
    
    // Update dragStart for next move
    dragStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {

    if (!isDragging) {
      return;
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleMouseUp);


    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    bringToFront(windowId);

    if ((e.target as HTMLElement).closest('.macos-header')) {
      setIsDragging(true);
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      dragStart.current = { x: clientX, y: clientY };
      e.preventDefault();
    }
  };


  return (
    <animated.div
      className={`draggable-window-wrapper ${className} ${expanded ? 'expanded' : ''}`}
      data-window-id={windowId}
      id={windowId}
      style={{
        transform: to([spring.x, spring.y], (x, y) => `translate(${x}px, ${y}px)`),
        cursor: isDragging ? 'grabbing' : 'default',
        zIndex: getZIndex(windowId),
        opacity: isVisible ? 1 : 0,
        // ...style
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      <Window
        isVisible={isVisible}
        onClose={() => closeWindow(windowId)}
        isDragging={isDragging}
        menuButtons={menuButtons}
      >
        {children}
      </Window>
    </animated.div>
  );
};

export default DraggableWindow;
