import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}

const Button = ({ children, primary, className = "" }: ButtonProps) => {
  return (
    <motion.span
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`
      inline-block
      px-8
      py-4
      rounded-xl
      font-semibold
      transition-all
      duration-300
      cursor-pointer

      ${
        primary
          ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_30px_rgba(6,182,212,.5)]"
          : "border border-cyan-500 hover:bg-cyan-500/20 text-white"
      }
      ${className}
      `}
    >
      {children}
    </motion.span>
  );
};

export default Button;