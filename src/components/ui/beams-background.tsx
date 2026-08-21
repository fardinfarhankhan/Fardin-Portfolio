"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface BeamsBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
  const angle = -35 + Math.random() * 10;
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle: angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    hue: 190 + Math.random() * 70,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  };
}

const MINIMUM_BEAMS = 20;

const OPACITY_MAP = {
  subtle: 0.7,
  medium: 0.85,
  strong: 1,
};

/**
 * Decorative "light beams" canvas backdrop — sized against its own
 * container (like NetworkCanvas) rather than the viewport, so it works
 * as a bounded background layer (e.g. behind a page header) instead of
 * only as a full-viewport hero. Pauses entirely under
 * prefers-reduced-motion, drawing a single static frame instead.
 */
export function BeamsBackground({ className, children, intensity = "strong" }: BeamsBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number>(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const updateCanvasSize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const totalBeams = MINIMUM_BEAMS * 1.5;
      beamsRef.current = Array.from({ length: totalBeams }, () => createBeam(width, height));
    };

    function resetBeam(beam: Beam, index: number, totalBeams: number) {
      const width = canvas!.width / dpr;
      const height = canvas!.height / dpr;
      const column = index % 3;
      const spacing = width / 3;

      beam.y = height + 100;
      beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
      beam.width = 100 + Math.random() * 100;
      beam.speed = 0.5 + Math.random() * 0.4;
      beam.hue = 190 + (index * 70) / totalBeams;
      beam.opacity = 0.2 + Math.random() * 0.1;
      return beam;
    }

    function drawBeam(context: CanvasRenderingContext2D, beam: Beam) {
      context.save();
      context.translate(beam.x, beam.y);
      context.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2) * OPACITY_MAP[intensity];

      const gradient = context.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
      gradient.addColorStop(0.1, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`);
      gradient.addColorStop(0.4, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
      gradient.addColorStop(0.6, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
      gradient.addColorStop(0.9, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`);
      gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

      context.fillStyle = gradient;
      context.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      context.restore();
    }

    function renderFrame() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      ctx.filter = "blur(35px)";
      beamsRef.current.forEach((beam) => drawBeam(ctx, beam));
    }

    function animate() {
      if (!canvas || !ctx) return;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.clearRect(0, 0, width, height);
      ctx.filter = "blur(35px)";

      const totalBeams = beamsRef.current.length;
      beamsRef.current.forEach((beam, index) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;

        if (beam.y + beam.length < -100) {
          resetBeam(beam, index, totalBeams);
        }

        drawBeam(ctx, beam);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    const ro = new ResizeObserver(updateCanvasSize);
    ro.observe(container);
    updateCanvasSize();

    if (reducedMotion) {
      renderFrame();
    } else {
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      ro.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [intensity, reducedMotion]);

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" style={{ filter: "blur(15px)" }} />

      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 bg-neutral-950/5"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
          style={{ backdropFilter: "blur(50px)" }}
        />
      )}

      {children && <div className="relative z-10 h-full w-full">{children}</div>}
    </div>
  );
}
