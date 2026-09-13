import { useEffect, useRef, useState } from "react";

export function useScrollProgress() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const total = Math.max(element.scrollHeight - element.clientHeight, 1);
      setProgress(element.scrollTop / total);
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    element.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      element.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { scrollRef, progress };
}
