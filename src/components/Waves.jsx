import React, { useRef, useEffect } from 'react';

const Waves = ({
  lineColor = '#10b981', // Emerald-500
  backgroundColor = 'transparent',
  waveSpeedX = 0.0125,
  waveSpeedY = 0.005,
  waveAmpX = 32,
  waveAmpY = 16,
  xGap = 10,
  yGap = 32,
  friction = 0.925,
  tension = 0.005,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let lines = [];

    class Line {
      constructor(y) {
        this.y = y;
        this.points = [];
        for (let x = 0; x <= width + xGap; x += xGap) {
          this.points.push({
            x: x,
            y: y,
            wave: { x: x, y: y },
            cursor: { x: x, y: y },
            target: { x: x, y: y }
          });
        }
      }

      update(time) {
        for (let i = 0; i < this.points.length; i++) {
          const point = this.points[i];
          
          // Calculate wave movement
          const moveX = Math.sin(time * waveSpeedX + (point.x * 0.002)) * waveAmpX;
          const moveY = Math.cos(time * waveSpeedY + (point.x * 0.002)) * waveAmpY;
          
          point.wave.x = point.x + moveX;
          point.wave.y = point.y + moveY;

          // Simple basic spring-like physics
          // Force
           const dx = point.target.x - point.cursor.x;
           const dy = point.target.y - point.cursor.y;
           
           point.cursor.x += dx * tension;
           point.cursor.y += dy * tension;
           
           point.cursor.x *= friction;
           point.cursor.y *= friction;

          // We'll just directly use the wave position for now for smooth ambient motion
          // Merging cursor interaction would be cool but complex for this snippet
        }
      }

      draw(ctx, time) {
        ctx.beginPath();
        
        let p0 = this.points[0];
        ctx.moveTo(p0.wave.x, p0.wave.y);

        for (let i = 0; i < this.points.length - 1; i++) {
           const p1 = this.points[i];
           const p2 = this.points[i+1];
           
           // Quadratic bezier for smoothness
           const midX = (p1.wave.x + p2.wave.x) / 2;
           const midY = (p1.wave.y + p2.wave.y) / 2;
           
           ctx.quadraticCurveTo(p1.wave.x, p1.wave.y, midX, midY);
        }

        // Connect the last point
        // ctx.lineTo(this.points[this.points.length-1].wave.x, this.points[this.points.length-1].wave.y);
        
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;
        // Fade out at edges
        // ctx.globalAlpha = 0.5; 
        ctx.stroke();
        // ctx.globalAlpha = 1;
      }
    }

    const init = () => {
      lines = [];
      // Create lines covering the screen vertically
      for (let y = 0; y <= height; y += yGap) {
        lines.push(new Line(y));
      }
    };

    const render = (time) => {
      ctx.fillStyle = backgroundColor === 'transparent' ? 'rgba(2, 6, 23, 1)' : backgroundColor; // slate-950
      ctx.fillRect(0, 0, width, height);

      // We use a lighter opacity for the lines to simulate the glow/fade
      ctx.globalAlpha = 0.2;
      lines.forEach(line => {
        line.update(time);
        line.draw(ctx, time);
      });
      ctx.globalAlpha = 1;

      animationFrameId = window.requestAnimationFrame(render);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    render(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [lineColor, backgroundColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, xGap, yGap, friction, tension]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default Waves;
