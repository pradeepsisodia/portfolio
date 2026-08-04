import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useRef, type MouseEvent } from "react";

type Props = {
  label: string;
  index?: number;
};

const AnimatedSkillTag = ({ label, index = 0 }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);

  const spotlight = useMotionTemplate`radial-gradient(140px circle at ${spotX}px ${spotY}px, rgba(34, 211, 238, 0.45), rgba(139, 92, 246, 0.15) 45%, transparent 70%)`;

  const onMove = (e: MouseEvent<HTMLSpanElement>) => {
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

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 18, scale: 0.9, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{
        delay: index * 0.045,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.07,
        y: -3,
        boxShadow: "0 12px 40px rgba(34, 211, 238, 0.2)",
      }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ backgroundImage: spotlight }}
      className="
        group
        relative
        inline-flex
        items-center
        overflow-hidden
        px-4
        py-2
        rounded-full
        border
        border-white/10
        bg-[#0a1020]/80
        backdrop-blur-md
        text-sm
        cursor-pointer
        transition-[border-color]
        duration-300
        hover:border-cyan-400/50
      "
    >
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-gradient-to-r
          from-cyan-500/10
          via-blue-500/10
          to-violet-500/10
        "
        aria-hidden
      />
      <span
        className="
          relative
          z-10
          font-medium
          text-gray-300
          transition-all
          duration-300
          group-hover:bg-gradient-to-r
          group-hover:from-cyan-300
          group-hover:via-sky-400
          group-hover:to-violet-400
          group-hover:bg-clip-text
          group-hover:text-transparent
        "
      >
        {label}
      </span>
    </motion.span>
  );
};

export default AnimatedSkillTag;
