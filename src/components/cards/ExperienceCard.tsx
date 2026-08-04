import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import AnimatedSkillTag from "../ui/AnimatedSkillTag";
import InteractiveCard from "../ui/InteractiveCard";

interface Props {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  icon: IconType;
  color: string;
  align?: "left" | "right";
  index?: number;
}

const ExperienceCard = ({
  role,
  company,
  period,
  description,
  skills,
  icon: Icon,
  color,
  align = "left",
  index = 0,
}: Props) => {
  return (
    <InteractiveCard
      index={index}
      spotlightColor={color}
      className="p-6 sm:p-7 shadow-xl"
    >
      <motion.div
        initial={{ opacity: 0, x: align === "left" ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div
          className="absolute -right-8 -top-8 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: color }}
          aria-hidden
        />

        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 280 }}
            className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-lg shrink-0"
            style={{
              background: `${color}22`,
              color,
            }}
          >
            <Icon aria-hidden />
          </motion.div>

          <div className="min-w-0">
            <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-violet-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
              {role}
            </h3>
            <p className="text-cyan-400 text-sm mt-0.5">{company}</p>
            <p className="text-gray-500 text-xs mt-0.5">{period}</p>
          </div>
        </div>

        <p className="mt-5 text-sm text-gray-300 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {skills.map((skill, skillIndex) => (
            <AnimatedSkillTag
              key={skill}
              label={skill}
              index={skillIndex}
            />
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="h-[2px] mt-6 rounded-full"
          style={{ background: color }}
        />
      </motion.div>
    </InteractiveCard>
  );
};

export default ExperienceCard;
