import { useRef } from 'react';

/**
 * Apple Fitness–style 3D perspective tilt with specular shimmer.
 * Attach ref to the card element; spread the event handlers on it.
 */
export const useTilt = (maxDeg = 14) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2; // -1 → 1
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2; // -1 → 1

    // Remove any leftover transition so motion follows the cursor instantly
    el.style.transition = 'box-shadow 0.2s ease';
    el.style.transform = [
      'perspective(900px)',
      `rotateY(${x * maxDeg}deg)`,
      `rotateX(${-y * maxDeg}deg)`,
      'scale3d(1.03, 1.03, 1.03)',
    ].join(' ');

    // Dynamic shadow follows the tilt direction
    el.style.boxShadow = [
      `${-x * 28}px ${y * 28}px 56px rgba(0,0,0,0.65)`,
      `${-x * 8}px  ${y * 8}px  20px rgba(0,0,0,0.3)`,
      '0 0 0 1px rgba(255,255,255,0.06)',
    ].join(', ');

    // Move the specular shimmer (light reflection)
    const shimmer = el.querySelector<HTMLElement>('[data-shimmer]');
    if (shimmer) {
      const px = (x * 0.5 + 0.5) * 100;
      const py = (y * 0.5 + 0.5) * 100;
      shimmer.style.background = `radial-gradient(ellipse at ${px}% ${py}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)`;
      shimmer.style.opacity = '1';
    }
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;

    // Spring back
    el.style.transition = 'transform 0.75s cubic-bezier(0.23,1,0.32,1), box-shadow 0.75s cubic-bezier(0.23,1,0.32,1)';
    el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
    el.style.boxShadow = '';

    const shimmer = el.querySelector<HTMLElement>('[data-shimmer]');
    if (shimmer) {
      shimmer.style.opacity = '0';
      shimmer.style.background = 'transparent';
    }
  };

  return { ref, onMouseMove, onMouseLeave };
};
