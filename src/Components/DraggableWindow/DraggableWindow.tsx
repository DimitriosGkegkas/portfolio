import { useRef, useEffect, useState, type ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";
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
  style?: React.CSSProperties;
  onClose?: () => void;
  windowId: string; // Required unique identifier for window management
}

const DraggableWindow = ({ 
  children, 
  menuButtons = [], 
  className = "",
  style = {},
  onClose,
  windowId
}: DraggableWindowProps) => {
  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  // Window state
  const [isVisible, setIsVisible] = useState(true);
  
  // Window manager
  const { bringToFront, getZIndex } = useWindowManager();

  // Spring animation for smooth return to original position
  const [springProps, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { 
      tension: 400, 
      friction: 30,
      mass: 0.8,
      precision: 0.001,
      clamp: false
    }
  }));

  // Drag event handlers
  const updatePosition = (clientX: number, clientY: number) => {
    if (!isDraggingRef.current) return;

    const deltaX = clientX - dragStartPos.current.x;
    const deltaY = clientY - dragStartPos.current.y;

    // Calculate distance from center for spring resistance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    setDragDistance(distance);
    
    // Smoother resistance calculation with easing
    const maxDistance = 150; // Reduced max distance for smoother feel
    const normalizedDistance = Math.min(distance / maxDistance, 1);
    
    // Use a smoother easing function (ease-out cubic)
    const resistanceFactor = 1 - Math.pow(1 - normalizedDistance, 3);
    const resistance = 1 - (resistanceFactor * 0.5); // Reduced max resistance to 50%
    
    // Apply resistance to the movement with smoothing
    const resistedX = deltaX * resistance;
    const resistedY = deltaY * resistance;

    // Cancel previous animation frame if it exists
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Use requestAnimationFrame for smoother updates
    animationFrameRef.current = requestAnimationFrame(() => {
      api.set({ 
        x: resistedX, 
        y: resistedY
      });
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    updatePosition(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return;

    // Cancel any pending animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    setIsDragging(false);
    isDraggingRef.current = false;
    setDragDistance(0);

    // Spring back to original position
    api.start({ x: 0, y: 0 });
  };

  // Touch event handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('.macos-header')) {
      setIsDragging(true);
      isDraggingRef.current = true;
      const touch = e.touches[0];
      dragStartPos.current = { x: touch.clientX, y: touch.clientY };
      e.preventDefault();
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDraggingRef.current) return;

    const touch = e.touches[0];
    updatePosition(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current) return;

    // Cancel any pending animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    setIsDragging(false);
    isDraggingRef.current = false;
    setDragDistance(0);

    // Spring back to original position
    api.start({ x: 0, y: 0 });
  };

  // Add global event listeners for mouse/touch events
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);


  // Handle mouse down for dragging and window focus
  const handleMouseDownForDrag = (e: React.MouseEvent) => {
    // Always bring to front first
    bringToFront(windowId);
    
    // Only allow dragging from the header
    if ((e.target as HTMLElement).closest('.macos-header')) {
      setIsDragging(true);
      isDraggingRef.current = true;
      dragStartPos.current = { x: e.clientX, y: e.clientY };
      e.preventDefault();
    }
  };

  // Control button handlers
  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <animated.div
      className={`draggable-window-wrapper ${className}`}
      data-window-id={windowId}
      style={{
        cursor: isDragging ? (dragDistance > 100 ? 'not-allowed' : 'grabbing') : 'default',
        x: springProps.x,
        y: springProps.y,
        zIndex: getZIndex(windowId),
        ...style
      }}
      onMouseDown={handleMouseDownForDrag}
      onTouchStart={handleTouchStart}
    >
      <Window 
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onClose={handleClose}
        isDragging={isDragging}
        menuButtons={menuButtons}
      >
        {children}
      </Window>
    </animated.div>
  );
};

export default DraggableWindow;
