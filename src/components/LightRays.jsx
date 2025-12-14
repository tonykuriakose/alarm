import React, { useRef, useEffect } from 'react';
import { cn } from '../lib/utils';

const LightRays = ({
  className,
  overlayClassName,
  speed = 3,  // Rotation speed
  count = 20, // Number of rays
  colors = ['#10b981', '#34d399', '#059669'], // Emerald shades
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Ray properties
    const rays = [];
    const initRays = (w, h) => {
      rays.length = 0;
      for (let i = 0; i < count; i++) {
        rays.push({
          x: w / 2, // Center x
          y: -100,  // Top (above screen)
          angle: (Math.PI * 2 * i) / count,
          length: Math.max(w, h) * 1.5,
          width: Math.random() * 0.1 + 0.05, // angular width
          speed: (Math.random() - 0.5) * 0.002 * speed, // drift speed
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initRays(canvas.width, canvas.height);
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Clear
      ctx.fillStyle = '#020617'; // slate-950
      ctx.fillRect(0, 0, w, h);

      // Draw rays
      // Composite operation for nicer blending
      ctx.globalCompositeOperation = 'screen';

      rays.forEach((ray) => {
        ray.angle += ray.speed;
        
        ctx.save();
        ctx.translate(ray.x, ray.y);
        ctx.rotate(ray.angle);
        
        // Gradient for the ray (fading out)
        const gradient = ctx.createLinearGradient(0, 0, 0, ray.length);
        gradient.addColorStop(0, `${ray.color}00`); // transparent start
        gradient.addColorStop(0.1, `${ray.color}${Math.floor(ray.opacity * 255).toString(16).padStart(2, '0')}`); // visible start
        gradient.addColorStop(1, `${ray.color}00`); // fade out

        ctx.fillStyle = gradient;
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-Math.tan(ray.width / 2) * ray.length, ray.length);
        ctx.lineTo(Math.tan(ray.width / 2) * ray.length, ray.length);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
      });

      ctx.globalCompositeOperation = 'source-over';
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, count, JSON.stringify(colors)]);

  return (
    <div className={cn("fixed inset-0 -z-10", className)}>
       <canvas ref={canvasRef} className="block w-full h-full" />
       {/* Overlay gradient to soften the bottom/edges if needed */}
       <div className={cn("absolute inset-0 bg-transparent", overlayClassName)} />
    </div>
  );
};

export default LightRays;
