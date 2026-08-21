"use client";

import { useEffect, useRef } from "react";

type NetworkCanvasProps = {
  className?: string;
  /** Roughly one node per this many square px. Lower = denser. */
  density?: number;
  minNodes?: number;
  maxNodes?: number;
  /** Max distance (px) at which two nodes are connected by a line. */
  linkDistance?: number;
  /** Whether the network responds to pointer position. */
  interactive?: boolean;
  lineOpacity?: number;
  nodeOpacity?: number;
  /** CSS custom property (on :root) used for the base line/node color. */
  colorVar?: string;
  /** CSS custom property (on :root) used for the near-cursor highlight color. */
  accentVar?: string;
};

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

/**
 * Abstract nodes-and-routes network — the site's recurring visual motif.
 * Canvas-based (not an animation library): a handful of drifting points,
 * connected when close, brightened near the cursor. Pauses entirely under
 * prefers-reduced-motion, drawing a single static frame instead.
 */
export function NetworkCanvas({
  className,
  density = 16000,
  minNodes = 18,
  maxNodes = 70,
  linkDistance = 150,
  interactive = true,
  lineOpacity = 0.5,
  nodeOpacity = 0.9,
  colorVar = "--color-ink-soft",
  accentVar = "--color-accent",
}: NetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    const pointer = { x: -9999, y: -9999, active: false };

    const rootStyle = getComputedStyle(document.documentElement);
    const getColor = (name: string, fallback: string) =>
      rootStyle.getPropertyValue(name).trim() || fallback;

    function seedNodes() {
      const area = width * height;
      const count = Math.max(
        minNodes,
        Math.min(maxNodes, Math.round(area / density))
      );
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    }

    function resize() {
      if (!canvas || !container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedNodes();
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const line = getColor(colorVar, "#7a7d72");
      const accent = getColor(accentVar, "#d1490f");

      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > linkDistance) continue;

          let near = false;
          if (interactive && pointer.active) {
            const pd = Math.min(
              Math.hypot(a.x - pointer.x, a.y - pointer.y),
              Math.hypot(b.x - pointer.x, b.y - pointer.y)
            );
            near = pd < 140;
          }

          const t = 1 - dist / linkDistance;
          ctx.strokeStyle = near ? accent : line;
          ctx.globalAlpha = (near ? 0.55 : 0.16) * t * lineOpacity * 2;
          ctx.lineWidth = near ? 1.1 : 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // nodes
      for (const n of nodes) {
        const pd = interactive
          ? Math.hypot(n.x - pointer.x, n.y - pointer.y)
          : Infinity;
        const near = pointer.active && pd < 140;
        ctx.globalAlpha = (near ? 1 : 0.55) * nodeOpacity;
        ctx.fillStyle = near ? accent : line;
        ctx.beginPath();
        ctx.arc(n.x, n.y, near ? 2.4 : 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    }

    function step() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      }
      draw();
      raf = requestAnimationFrame(step);
    }

    let raf = 0;
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    if (interactive) {
      container.addEventListener("pointermove", onPointerMove);
      container.addEventListener("pointerleave", onPointerLeave);
    }

    if (reduceMotion) {
      draw();
    } else {
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (interactive) {
        container.removeEventListener("pointermove", onPointerMove);
        container.removeEventListener("pointerleave", onPointerLeave);
      }
    };
  }, [
    density,
    minNodes,
    maxNodes,
    linkDistance,
    interactive,
    lineOpacity,
    nodeOpacity,
    colorVar,
    accentVar,
  ]);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
