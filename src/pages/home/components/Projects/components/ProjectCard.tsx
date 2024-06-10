import { IProject } from "../../../../../shared/interfaces/Project";

function ProjectCard({ project }: { project: IProject }) {
  return (
    <div className="rounded-2xl flex-grow h-full shadow-lg hover:shadow-2xl lg:max-w-[30%]">
      {/* Card Header */}
      <div className="w-full h-full max-h-[230px] bg-dark rounded-2xl">
        {project.image ? (
          <img
            className="w-full rounded-lg max-h-[230px] object-cover"
            src={project.image}
          />
        ) : (
          <div className="w-full h-full min-h-[230px] object-cover flex justify-center items-center">
            <h2 className="font-bold text-white text-center text-7xl">{project.alias}</h2>
          </div>
        )}
      </div>
      {/* Card Body */}
      <div className="w-full p-6">
        <h2 className="font-bold text-xl py-3">{project.name}</h2>
        <p className="line-clamp-2">{project.shortDescription}</p>
      </div>
      {/* Card Footer */}
      <div className="p-6 w-full flex justify-between items-center flex-wrap">
        <div className="flex gap-3 items-center">
          {project.technologies?.map(tech=>tech.icon.source)}
        </div>
        <a className="border-2 pl-6 min-w-[60%] rounded-full p-2 flex gap-3 w-fit hover:scale-105 cursor-pointer ">
          Ver mais →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
