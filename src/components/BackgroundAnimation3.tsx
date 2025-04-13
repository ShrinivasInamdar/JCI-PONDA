'use client';

import { useEffect, useRef } from 'react';

const BackgroundAnimation3 = () => {
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

    class Wave {
      private amplitude: number;
      private period: number;
      private phase: number;
      private color: string;
      private yOffset: number;

      constructor(amplitude: number, period: number, phase: number, color: string, yOffset: number) {
        this.amplitude = amplitude;
        this.period = period;
        this.phase = phase;
        this.color = color;
        this.yOffset = yOffset;
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x < canvas.width; x++) {
          const y = this.amplitude * 
            Math.sin((x / this.period) + time / 1000 + this.phase) + 
            canvas.height * this.yOffset;
          
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const waves = [
      new Wave(30, 200, 0, 'rgba(0, 50, 150, 0.2)', 0.6),
      new Wave(40, 150, 2, 'rgba(0, 30, 100, 0.15)', 0.65),
      new Wave(25, 180, 4, 'rgba(0, 20, 80, 0.1)', 0.7),
      new Wave(35, 250, 1, 'rgba(0, 40, 120, 0.12)', 0.75),
    ];

    let time = 0;
    const animate = () => {
      if (!ctx) return;

      // Clear canvas with base color
      ctx.fillStyle = '#000319';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create gradient overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(0, 20, 80, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 3, 25, 0)');
      
      // Draw waves
      waves.forEach(wave => wave.draw(ctx, time));

      // Apply gradient overlay
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle shimmer effect
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2;
        const opacity = Math.random() * 0.2;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      }

      time += 16; // Approximately 60 FPS
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

export default BackgroundAnimation3;