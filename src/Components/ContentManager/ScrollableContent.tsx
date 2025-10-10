import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC, type ReactNode, useRef, useState, useEffect } from "react";

interface ScrollableContentProps {
  children: ReactNode; // 3D elements (StaticItemDiv, Scroll with 3D content, etc.)
  htmlContent: ReactNode; // Content that goes inside the content-scroll-container
  damping?: number;
  zIndex?: number;
}

export const ScrollableContent: FC<ScrollableContentProps> = ({ 
  children, 
  htmlContent,
  damping = 0.1,
  zIndex = 1000000000 
}) => {
  const [pages, setPages] = useState(1);
  const contentScrollContainerRef = useRef<HTMLDivElement>(null);

  const calculatePages = (element: HTMLDivElement) => {
    const height = window.innerHeight;
    const contentHeight = element.clientHeight;
    const calculatedPages = contentHeight / height + 0.5;
    setPages(calculatedPages);
  };

  const contentRefCallback = (node: HTMLDivElement | null) => {
    if (node) {
      contentScrollContainerRef.current = node;
      // Calculate pages when ref is set
      calculatePages(node);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (contentScrollContainerRef.current) {
        calculatePages(contentScrollContainerRef.current);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScrollControls damping={damping} pages={pages} style={{ zIndex }}>
      {children}
      <Scroll html>
        <div ref={contentRefCallback} className="content-scroll-container">
          {htmlContent}
        </div>
      </Scroll>
    </ScrollControls>
  );
};

