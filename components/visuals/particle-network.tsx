"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  pulse: number;
};

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let frame = 0;
    let animationId = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * pixelRatio);
      canvas.height = Math.floor(rect.height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.max(48, Math.min(118, Math.floor(rect.width / 12)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.18,
        size: Math.random() * 1.4 + 0.7,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const drawFlowLine = (
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      offset: number,
    ) => {
      const gradient = context.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, "rgba(0, 122, 255, 0)");
      gradient.addColorStop(0.48, "rgba(0, 212, 255, 0.36)");
      gradient.addColorStop(1, "rgba(0, 122, 255, 0)");

      context.beginPath();
      context.moveTo(startX, startY);
      context.bezierCurveTo(
        startX + 180,
        startY - 90 + offset,
        endX - 180,
        endY + 90 - offset,
        endX,
        endY,
      );
      context.strokeStyle = gradient;
      context.lineWidth = 1;
      context.stroke();
    };

    const animate = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      frame += 0.006;

      context.clearRect(0, 0, width, height);

      const radial = context.createRadialGradient(
        width * 0.62,
        height * 0.42,
        0,
        width * 0.62,
        height * 0.42,
        width * 0.54,
      );
      radial.addColorStop(0, "rgba(0, 122, 255, 0.16)");
      radial.addColorStop(0.42, "rgba(0, 212, 255, 0.06)");
      radial.addColorStop(1, "rgba(11, 16, 32, 0)");
      context.fillStyle = radial;
      context.fillRect(0, 0, width, height);

      for (let index = 0; index < 4; index += 1) {
        const y = height * (0.24 + index * 0.16);
        drawFlowLine(
          width * -0.08,
          y,
          width * 1.08,
          height * (0.32 + index * 0.12),
          Math.sin(frame * 16 + index) * 26,
        );
      }

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -24) particle.x = width + 24;
        if (particle.x > width + 24) particle.x = -24;
        if (particle.y < -24) particle.y = height + 24;
        if (particle.y > height + 24) particle.y = -24;

        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 118;

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.2;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }

        const pulse = Math.sin(frame * 42 + particle.pulse) * 0.45 + 0.55;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size + pulse * 0.9, 0, Math.PI * 2);
        context.fillStyle = `rgba(185, 232, 255, ${0.28 + pulse * 0.32})`;
        context.fill();
      });

      animationId = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
