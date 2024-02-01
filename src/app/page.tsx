import { ProjectCard } from "@/app/components/ProjectCard";
import { ToolBadge } from "@/app/components/ToolBadge";
import { Project } from "./api/projects/route";
import { getBaseUrl } from "./utils/getBaseURL";
import Image from "next/image";

async function getTools() {
  const url = `${getBaseUrl()}/api/tools`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch tools from URL: ${url}. RES: ${JSON.stringify(res)}`
    );
  }
  return res.json();
}

async function getProjects() {
  const res = await fetch(`${getBaseUrl()}/api/projects`);
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}

export default async function Home() {
  const tools: string[] = await getTools();
  const projects: Project[] = await getProjects();

  return (
    <main className="mt-4 sm:mt-0 mx-4 sm:mx-10 relative">
      <h1 className="text-4xl sm:text-6xl font-bold mb-3">Marko Prodanovic</h1>
      <h2 className="text-2xl sm:text-4xl font-medium mb-6 underline-effect">
        Software Developer
      </h2>
      <p className="text-md sm:text-lg mb-8">
        I design and build apps for web and mobile
      </p>
      <p className="text-md sm:text-lg font-bold mb-4">
        Tools I’ve been working with lately:
      </p>
      <div className="scroll-container">
        <div className="scroll-content space-x-4">
          {tools.map((tool: string, index: number) => (
            <ToolBadge key={index} text={tool} />
          ))}
          {tools.map((tool: string, index: number) => (
            <ToolBadge key={`duplicate-${index}`} text={tool} />
          ))}
        </div>
      </div>
      <div className="featured-work-container">
        {" "}
        <h3 className="text-2xl sm:text-4xl font-bold mt-14 sm:mt-20">
          Featured Work
        </h3>
      </div>
      <Image
        src="top-right-rule.svg"
        width={265}
        height={159}
        alt="Top left rule"
        className="absolute top-20 right-0 hidden sm:block sm:translate-x-10 md:translate-x-14 sm:translate-y-72"
      />
      <div className="mt-8 sm:mt-12 mx-auto max-w-lg lg:max-w-none grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </main>
  );
}
