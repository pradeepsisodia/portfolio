import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import InteractiveCard from "../ui/InteractiveCard";

interface SkillCardProps {
  name: string;
  icon: IconType;
  color: string;
  index?: number;
}

const SkillCard = ({ name, icon: Icon, color, index = 0 }: SkillCardProps) => {
  return (
    <InteractiveCard
      index={index}
      spotlightColor={color}
      className="p-5 sm:p-6 flex flex-col items-center gap-3"
    >
      <motion.div
        style={{ color }}
        className="text-4xl sm:text-5xl"
        whileHover={{ scale: 1.12, rotate: 8 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
      >
        <Icon aria-hidden />
      </motion.div>

      <h3 className="text-base font-semibold text-gray-200 text-center transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-blue-400 group-hover:to-violet-400 group-hover:bg-clip-text group-hover:text-transparent">
        {name}
      </h3>
    </InteractiveCard>
  );
};

export default SkillCard;
