import { Project } from "../api/projects/route";
import { CardButton } from "./CardButton";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row bg-customBackgroundSecondary shadow-lg rounded-2xl p-5">
      <div className="w-full lg:basis-1/3 bg-blue-400 rounded-lg aspect-square mr-0 lg:mr-8 mb-8 lg:mb-0" />
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col">
          <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
          <div className="flex flex-row gap-3 mb-6 flex-wrapj">
            {project.stack.map((t, index) => (
              <div
                key={index}
                className="bg-customBackground rounded-full py-1 px-3 border"
              >
                <p className="text-sm font-bold">{t}</p>
              </div>
            ))}
          </div>
          <p className="text-m text-matteBlack leading-7">
            {project.description}
          </p>
        </div>
        <div className="flex flex-row justify-end gap-4 mt-4">
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
