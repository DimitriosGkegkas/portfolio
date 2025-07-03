import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

interface ItemDivProps {
  offset: number; // vertical offset in vh
  children: React.ReactNode;
}

export const ItemDiv: React.FC<ItemDivProps> = ({ offset, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = useScroll();
  const [opacity, setOpacity] = useState(0);

  useFrame(() => {
    const pageHeight =  scroll.pages; // single page normalized
    const scrollOffset = (pageHeight - 1)* scroll.offset + 0.6; // normalized [0, 1]
    const itemScroll = offset / 100; // convert vh to normalized scroll (assuming 100vh = 1 page)

    const distance = scrollOffset - itemScroll;
    const fadeDistance = 0.3; // how far before/after center it starts fading

    const nextOpacity = Math.max(0, Math.min(distance / fadeDistance, 1));
    setOpacity(nextOpacity);
  });

  return (
    <div
      ref={ref}
      className='project-text'
      style={{
        ...styles(offset),
        opacity,
        transition: "opacity 0.1s ease",
      }}>
      {children}
    </div>
  );
};

const styles: (vh: number) => React.CSSProperties = (vh) => ({
  top: `${vh}vh`,
});
