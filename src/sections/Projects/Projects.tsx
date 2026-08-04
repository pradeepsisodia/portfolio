import Container from "../../components/Common/Container";
import SectionTitle from "../../components/Common/SectionTitle";
import ProjectCard from "../../components/cards/ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/4 w-72 h-72 bg-purple-500/10 blur-[120px]" />

      <Container>
        <SectionTitle subtitle="My Work" title="Featured Projects" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 mt-16 max-w-[1400px] mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
