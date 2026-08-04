import {
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";
import InteractiveCard from "../../ui/InteractiveCard";

const stats = [
  {
    icon: FaBriefcase,
    value: "1+",
    title: "Years Experience",
    color: "#22d3ee",
  },
  {
    icon: FaCode,
    value: "20+",
    title: "Projects Completed",
    color: "#60a5fa",
  },
  {
    icon: FaLaptopCode,
    value: "15+",
    title: "Technologies",
    color: "#a78bfa",
  },
  {
    icon: FaChartLine,
    value: "100%",
    title: "Finance & Automation",
    color: "#34d399",
  },
];

const AboutStats = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5">
      {stats.map((item, index) => {
        const Icon = item.icon;
        return (
          <InteractiveCard
            key={item.title}
            index={index}
            spotlightColor={item.color}
            className="p-5 sm:p-6 text-center"
          >
            <Icon
              className="text-3xl mx-auto mb-3"
              style={{ color: item.color }}
              aria-hidden
            />
            <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-violet-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
              {item.value}
            </h3>
            <p className="mt-1.5 text-gray-400 text-xs sm:text-sm">
              {item.title}
            </p>
          </InteractiveCard>
        );
      })}
    </div>
  );
};

export default AboutStats;
