import { Project } from "../api/projects/route";
import { CardButton } from "./CardButton";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  return (
    <div className="bg-customBackgroundSecondary shadow-lg rounded-2xl flex overflow-hidden">
      <div className="bg-accentSecondary w-3 h-full flex-shrink-0" />
      <div className="flex flex-col justify-between">
        <div className="p-4">
          <h4 className="text-xl font-semibold mt-2 mb-6">{project.title}</h4>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>
        <div className="p-4 grid grid-cols-2 gap-2">
          {project.githubLink && (
            <CardButton text="GitHub" href={project.githubLink} />
          )}
          {project.demoLink && (
            <CardButton text="Live" href={project.demoLink} />
          )}
        </div>
      </div>
    </div>
  );
};
