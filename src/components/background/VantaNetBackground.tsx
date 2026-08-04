import { useEffect, useRef } from "react";
import * as THREE from "three";

type Particle = { x: number; y: number; vx: number; vy: number; z: number };

/** Canvas NET mesh — always visible fallback (Vanta-style). */
const CanvasNetLayer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let frame = 0;
    let raf = 0;

    const isMobile = w < 768;
    const count = isMobile ? 55 : 90;
    const linkDist = isMobile ? 110 : 150;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      z: Math.random(),
    }));

    const draw = () => {
      frame++;
      ctx.fillStyle = "#050816";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const pulse = 0.55 + p.z * 0.45;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(63, 170, 210, ${0.35 + p.z * 0.5})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const alpha = ((linkDist - dist) / linkDist) * 0.22;
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="site-net-canvas fixed inset-0 z-0 h-full w-full pointer-events-none"
      aria-hidden
    />
  );
};

const VantaNetBackground = () => {
  const vantaMountRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<{ destroy: () => void; resize: () => void } | null>(
    null
  );

  useEffect(() => {
    const mount = vantaMountRef.current;
    if (!mount) return;

    let cancelled = false;

    const win = window as Window & { THREE?: typeof THREE };
    win.THREE = THREE;

    const boot = async () => {
      try {
        const { default: NET } = await import("vanta/dist/vanta.net.min");
        if (cancelled || !vantaMountRef.current) return;

        const isMobile = window.innerWidth < 768;
        effectRef.current = NET({
          el: vantaMountRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 0.92,
          color: 0x3faad2,
          backgroundColor: 0x050816,
          points: isMobile ? 10 : 14,
          maxDistance: isMobile ? 18 : 22,
          spacing: isMobile ? 20 : 16,
        });

        const canvas = vantaMountRef.current.querySelector("canvas");
        if (canvas) {
          canvas.classList.add("site-net-canvas");
        }
      } catch {
        /* CanvasNetLayer remains visible */
      }
    };

    void boot();

    const onResize = () => effectRef.current?.resize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <CanvasNetLayer />
      <div
        ref={vantaMountRef}
        className="absolute inset-0 z-[1] pointer-events-none [&_canvas]:pointer-events-none"
      />
    </div>
  );
};

export default VantaNetBackground;
