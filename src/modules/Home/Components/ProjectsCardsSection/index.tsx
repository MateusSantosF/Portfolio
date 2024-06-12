import Divider from "@shared/components/Divider";
import { projects } from "@/shared/data/projects";
import ProjectCard from "../ProjectCard";

function Projects() {
  return (
    <section className="min-h-[70lvh] md:px-6" id="projects">
      <Divider maxWidth={"30%"} />
      <h2 className="pt-6 text-3xl font-bold">Projetos</h2>

      <ul className="pt-12 flex gap-12 justify-around flex-wrap">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
