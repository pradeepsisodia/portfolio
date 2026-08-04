import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const CODE_LINES = [
  { text: "const build = async () => {", tone: "keyword" as const },
  { text: '  const stack = ["React", "Next", "TS"];', tone: "muted" as const },
  { text: "  return craftPremiumUI(stack);", tone: "accent" as const },
  { text: "};", tone: "keyword" as const },
];

const toneClass = {
  keyword: "text-violet-300",
  muted: "text-slate-300",
  accent: "text-cyan-300",
};

const stats = [
  { value: "1+", label: "Years" },
  { value: "10+", label: "Projects" },
  { value: "100%", label: "UI craft" },
];

const stackIcons = [
  { Icon: SiReact, color: "#61DAFB", label: "React" },
  { Icon: SiNextdotjs, color: "#fff", label: "Next.js" },
  { Icon: SiTypescript, color: "#3178C6", label: "TS" },
  { Icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind" },
];

const HeroShowcase = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const reveal = () => {
      CODE_LINES.forEach((_, i) => {
        setTimeout(() => {
          if (!cancelled) setVisibleLines(i + 1);
        }, 500 + i * 450);
      });
    };
    reveal();
    const loop = setInterval(() => {
      setVisibleLines(0);
      reveal();
    }, 7000);
    return () => {
      cancelled = true;
      clearInterval(loop);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      {/* Profile — main focal point */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-[72%] sm:w-[68%]"
      >
        {/* Soft glow — pulse only, no spin */}
        <motion.div
          className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/25 to-purple-500/20 blur-2xl"
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative rounded-[2rem] p-[2px] bg-gradient-to-br from-cyan-400/70 via-blue-500/50 to-violet-500/70 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        >
          <div className="relative aspect-[4/5] rounded-[1.85rem] overflow-hidden bg-[#0c1222] ring-1 ring-white/10">
            <img
              src="/profile.png"
              alt="Pradeep"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/90">
                Portfolio
              </p>
              <p className="text-xl font-bold text-white mt-1">Pradeep</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Tech row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-6 flex justify-center gap-3 flex-wrap"
      >
        {stackIcons.map(({ Icon, color, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-gray-300"
          >
            <Icon style={{ color }} className="text-lg" aria-hidden />
            <span>{label}</span>
          </div>
        ))}
      </motion.div>

      {/* Stats — no overlap */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mt-5 grid grid-cols-3 gap-2"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center py-3 rounded-xl bg-white/[0.03] border border-white/10"
          >
            <p className="text-lg font-bold text-cyan-400">{stat.value}</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Code card — compact, offset */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.7 }}
        className="mt-6 rounded-xl border border-white/10 bg-[#0a1020]/95 backdrop-blur-xl shadow-xl overflow-hidden"
      >
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-white/[0.02]">
          <span className="w-2 h-2 rounded-full bg-red-400/80" />
          <span className="w-2 h-2 rounded-full bg-amber-400/80" />
          <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[10px] text-gray-500 font-mono">build.ts</span>
        </div>
        <div className="p-3 font-mono text-[10px] sm:text-[11px] leading-relaxed min-h-[88px]">
          {CODE_LINES.map((line, i) => (
            <div
              key={i}
              className={`transition-opacity duration-300 ${
                i < visibleLines ? "opacity-100" : "opacity-0"
              } ${toneClass[line.tone]}`}
            >
              {line.text}
            </div>
          ))}
          <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-cyan-400 animate-pulse align-middle" />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute -z-10 top-[20%] left-1/2 -translate-x-1/2 w-[90%] h-[45%] bg-cyan-500/12 blur-[80px] rounded-full" />
    </div>
  );
};

export default HeroShowcase;
