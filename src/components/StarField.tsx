
import { useEffect, useRef } from 'react';

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      twinkleSpeed: number;
      phase: number;
    }> = [];

    // Shooting stars
    const shootingStars: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
    }> = [];

    // Initialize stars
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const createShootingStar = () => {
      if (Math.random() < 0.001) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.3,
          length: Math.random() * 60 + 15,
          speed: Math.random() * 2 + 1,
          angle: Math.random() * Math.PI / 6 + Math.PI / 4,
          opacity: 1,
        });
      }
    };

    const animate = () => {
      // Very dark background that looks almost black
      ctx.fillStyle = 'rgba(10, 10, 26, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and animate stars
      stars.forEach((star) => {
        star.phase += star.twinkleSpeed;
        star.opacity = 0.2 + Math.sin(star.phase) * 0.6;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Add subtle glow for brighter stars
        if (star.radius > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(147, 197, 253, ${star.opacity * 0.2})`;
          ctx.fill();
        }
      });

      // Create shooting stars
      createShootingStar();

      // Draw and animate shooting stars
      shootingStars.forEach((shootingStar, index) => {
        const gradient = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
          shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
        );

        gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
        gradient.addColorStop(0.5, `rgba(147, 197, 253, ${shootingStar.opacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
          shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
          shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
        );
        ctx.stroke();

        // Update shooting star position
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.opacity -= 0.01;

        if (shootingStar.opacity <= 0 || shootingStar.x > canvas.width || shootingStar.y > canvas.height) {
          shootingStars.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Create moving white spots
  const createMovingSpots = () => {
    const spots = [];
    for (let i = 0; i < 20; i++) {
      spots.push(
        <div
          key={i}
          className="white-spot"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      );
    }
    return spots;
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full -z-20"
        style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0a0a1a 100%)' }}
      />
      <div className="moving-spots">
        {createMovingSpots()}
      </div>
    </>
  );
};
