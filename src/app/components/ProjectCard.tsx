import { Project } from "../data/projects";
import { CardButton } from "./CardButton";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row bg-customBackground p-5 border-b-2">
      <Image
        src={project.imgPath} // Update this path to the actual image location in your public folder
        alt="Project Image"
        width="400"
        height="400"
        className="w-full lg:basis-1/3 rounded-lg aspect-square mr-0 lg:mr-8 mb-8 lg:mb-0"
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col">
          <h4 className="text-xl sm:text-2xl font-bold mb-4">
            {project.title}
          </h4>
          <div className="flex flex-row gap-3 mb-6 flex-wrap">
            {project.stack.map((t, index) => (
              <div
                key={index}
                className="bg-matteBlack rounded-full py-1 px-3 border"
              >
                <p className="text-sm text-customBackground font-bold">{t}</p>
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
