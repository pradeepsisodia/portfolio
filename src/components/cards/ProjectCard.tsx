import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import InteractiveCard, {
  getProjectOpenUrl,
} from "../ui/InteractiveCard";

interface Props {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
  index?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  live,
  github,
  index = 0,
}: Props) => {
  const openUrl = getProjectOpenUrl(live, github);

  const openProject = () => {
    if (!openUrl) return;
    window.open(openUrl, "_blank", "noopener,noreferrer");
  };

  const stopNav = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <InteractiveCard
      index={index}
      onClick={openUrl ? openProject : undefined}
      className="flex flex-col h-full"
    >
      <div className="relative overflow-hidden shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-36 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />

        {openUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/35 transition-colors duration-300">
            <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-3 py-1.5 rounded-full bg-cyan-400 text-[#050816] text-xs font-bold shadow-lg">
              Open project
            </span>
          </div>
        )}

        <div className="absolute top-2.5 right-2.5">
          {live?.trim() ? (
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-semibold">
              Live
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full bg-amber-500/90 text-black text-[10px] font-semibold">
              Soon
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-base sm:text-lg font-bold text-white leading-snug transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-violet-400 group-hover:bg-clip-text group-hover:text-transparent">
          {title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {tech.slice(0, 4).map((item) => (
            <span
              key={item}
              className="px-2 py-0.5 rounded-md text-[10px] border border-white/10 bg-white/[0.03] text-gray-400 group-hover:text-cyan-200/90 transition-colors"
            >
              {item}
            </span>
          ))}
          {tech.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] text-gray-500">
              +{tech.length - 4}
            </span>
          )}
        </div>

        <div
          className="flex items-center gap-4 mt-3 pt-3 border-t border-white/10 text-xs"
          onClick={stopNav}
          onKeyDown={(e) => e.stopPropagation()}
        >
          {live?.trim() ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-white transition-colors"
            >
              <FaExternalLinkAlt className="text-[10px]" />
              Live demo
            </a>
          ) : (
            <span className="text-amber-400/90">Not deployed</span>
          )}

          {github && github !== "#" && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-white transition-colors"
            >
              <FaGithub />
              Code
            </a>
          )}
        </div>
      </div>
    </InteractiveCard>
  );
};

export default ProjectCard;
