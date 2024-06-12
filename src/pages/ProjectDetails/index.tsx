import { projects } from "@/shared/data/projects";
import { IProject } from "@/shared/interfaces/Project";
import { useEffect, useState } from "react";
import { useParams, redirect } from "react-router-dom";

function ProjectDetails() {
  const { projectId } = useParams() as { projectId: string };
  const [project, setProject] = useState<IProject | null>(null);

  useEffect(() => {
    const targetProject = projects.find(
      (pjt) => pjt.id.toLowerCase() === projectId.toLowerCase()
    );
    if (!targetProject) {
      redirect("/");
      return;
    }

    setProject(targetProject);
  }, [projectId]);

  return (
    <main className="min-h-screen">
      <header className="h-[35vh] bg-dark z-10" >
        <div className="flex items-center container h-full" >
          <h1 className="flex pb-16 text-6xl font-bold text-balance text-white px-6 leading-snug">
            {project?.name}
          </h1>
        </div>
      </header>
      <section className="h-full container flex justify-center">
        <div className="h-screen w-full p-6 md:p-12 -mt-[70px] bg-white shadow-lg rounded-t-lg flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Descrição</h2>
          <p className="text-white">{project?.fullDescription}</p>

          <h2 className="text-2xl font-bold">Tecnologias</h2>
          <ul className="flex flex-wrap gap-4">
            {project?.technologies?.map((tech, index) => (
              <li
                key={index}
                className="bg-dark text-white px-4 py-2 rounded-lg flex gap-3 items-center"
              >
                {tech.icon.source}{tech.name}
              </li>
            ))}
            </ul>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetails;
