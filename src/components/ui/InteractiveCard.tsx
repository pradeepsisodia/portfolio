import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  useRef,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";

type InteractiveCardProps = {
  children: ReactNode;
  className?: string;
  index?: number;
  onClick?: () => void;
  /** CSS color for mouse spotlight (hex) */
  spotlightColor?: string;
};

const InteractiveCard = ({
  children,
  className = "",
  index = 0,
  onClick,
  spotlightColor = "#22d3ee",
}: InteractiveCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);

  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${spotX}px ${spotY}px, ${spotlightColor}2e, transparent 68%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    spotX.set(e.clientX - rect.left);
    spotY.set(e.clientY - rect.top);
  };

  const onLeave = () => {
    spotX.set(0);
    spotY.set(0);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  const clickable = Boolean(onClick);

  return (
    <motion.div
      ref={ref}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onKeyDown}
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-36px" }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={clickable ? { scale: 0.98 } : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ backgroundImage: spotlight }}
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        transition-[border-color,box-shadow]
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_20px_50px_rgba(34,211,238,0.14)]
        ${clickable ? "cursor-pointer" : "cursor-default"}
        ${className}
      `}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/[0.07] via-transparent to-violet-500/10"
        aria-hidden
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

export default InteractiveCard;

export function getProjectOpenUrl(live: string, github: string): string | null {
  const liveUrl = live?.trim();
  if (liveUrl) return liveUrl;
  const gh = github?.trim();
  if (gh && gh !== "#") return gh;
  return null;
}
