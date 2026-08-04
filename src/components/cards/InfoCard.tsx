import type { ReactNode } from "react";
import InteractiveCard from "../ui/InteractiveCard";

interface Props {
  icon: ReactNode;
  title: string;
  value: string;
  description?: string;
  index?: number;
}

const InfoCard = ({ icon, title, value, description, index = 0 }: Props) => {
  return (
    <InteractiveCard index={index} className="p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-white/10 flex items-center justify-center text-2xl text-cyan-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        <div className="min-w-0">
          <h4 className="text-xs uppercase tracking-wider text-gray-500">
            {title}
          </h4>
          <p className="text-lg font-bold mt-1 text-white group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-violet-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
            {value}
          </p>
          {description && (
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </InteractiveCard>
  );
};

export default InfoCard;
