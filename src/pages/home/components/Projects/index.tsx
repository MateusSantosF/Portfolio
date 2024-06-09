import Divider from "@shared/components/Divider";
import ProjectCard from "./components/ProjectCard";
import { projects } from "@/shared/data/projects";

function Projects() {
  return (
    <section className="min-h-[70lvh] px-6" id="projects">
      <Divider maxWidth={"30%"} />
      <h2 className="pt-6 text-3xl font-bold">Projetos</h2>

      <ul className="pt-12 flex gap-12 justify-around flex-wrap">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
