import { ProjectCard } from "@/app/components/ProjectCard";
import { ToolBadge } from "@/app/components/ToolBadge";
import { Project } from "./api/projects/route";
import { Footer } from "./components/Footer";
import Image from "next/image";

async function getTools() {
  const res = await fetch(`${process.env.URL}/api/tools`);
  if (!res.ok) {
    throw new Error("Failed to fetch tools");
  }
  return res.json();
}

async function getProjects() {
  const res = await fetch(`${process.env.URL}/api/projects`);
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}

export default async function Home() {
  const tools: string[] = await getTools();
  const projects: Project[] = await getProjects();

  return (
    <main className="mx-10 relative">
      <h1 className="text-6xl font-bold mb-3">Marko Prodanovic</h1>
      <h2 className="text-4xl font-medium mb-6 underline-effect">
        Software Developer
      </h2>
      <p className="text-lg mb-8">I design and build apps for web and mobile</p>
      <p className="text-lg font-bold mb-4">
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
        <h3 className="text-4xl font-bold mt-20">Featured Work</h3>
      </div>
      <Image
        src="top-right-rule.svg"
        width={265}
        height={159}
        alt="Top left rule"
        className="absolute top-20 right-0"
        style={{ transform: "translate(50px, 290px)" }}
      />
      <div className="mt-12 mx-auto max-w-lg lg:max-w-none grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </main>
  );
}
