'use client';

import { useEffect, useRef } from 'react';

const BackgroundAnimation1 = () => {
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

    class Shape {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      moveX: number;
      moveY: number;
      opacity: number;
      type: 'square' | 'triangle' | 'circle';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 30 + 10;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.moveX = (Math.random() - 0.5) * 0.5;
        this.moveY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.15 + 0.05;
        this.type = ['square', 'triangle', 'circle'][Math.floor(Math.random() * 3)] as 'square' | 'triangle' | 'circle';
      }

      update() {
        this.x += this.moveX;
        this.y += this.moveY;
        this.rotation += this.rotationSpeed;

        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = `rgba(100, 149, 237, ${this.opacity})`;
        ctx.strokeStyle = `rgba(135, 206, 250, ${this.opacity})`;
        ctx.lineWidth = 1;

        switch (this.type) {
          case 'square':
            ctx.beginPath();
            ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.fill();
            ctx.stroke();
            break;
          
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -this.size / 2);
            ctx.lineTo(-this.size / 2, this.size / 2);
            ctx.lineTo(this.size / 2, this.size / 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
          
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            break;
        }

        ctx.restore();
      }
    }

    const shapes = Array.from({ length: 50 }, () => new Shape());

    const drawGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#000319');
      gradient.addColorStop(1, '#001333');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      if (!ctx) return;

      drawGradient();

      shapes.forEach(shape => {
        shape.update();
        shape.draw(ctx);
      });

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

export default BackgroundAnimation1;