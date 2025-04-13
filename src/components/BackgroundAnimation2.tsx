'use client';

import { useEffect, useRef } from 'react';

const BackgroundAnimation2 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class GradientPoint {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 100 + 50;
        this.color = `rgba(0, ${Math.floor(Math.random() * 50 + 20)}, ${Math.floor(Math.random() * 100 + 50)}, 0.3)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0, 3, 25, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    const points = Array.from({ length: 8 }, () => new GradientPoint());

    const animate = () => {
      if (!ctx) return;

      // Clear canvas with base color
      ctx.fillStyle = '#000319';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw gradient points
      points.forEach(point => {
        point.update();
        point.draw(ctx);
      });

      // Add subtle noise texture
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        if (Math.random() < 0.02) {
          const noise = Math.random() * 10;
          data[i] = Math.min(data[i] + noise, 255);     // R
          data[i + 1] = Math.min(data[i + 1] + noise, 255); // G
          data[i + 2] = Math.min(data[i + 2] + noise, 255); // B
        }
      }
      
      ctx.putImageData(imageData, 0, 0);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="interactive-bg"
      style={{ background: '#000319' }}
    />
  );
};

export default BackgroundAnimation2;