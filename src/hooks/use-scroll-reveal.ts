import { useRef, useState, useEffect } from 'react';

/**
 * Triggers a CSS reveal class once the element enters the viewport.
 * Use with the `.reveal`, `.reveal-left`, or `.reveal-right` utility classes.
 */
export const useScrollReveal = (threshold = 0.12) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
};
