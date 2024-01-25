import Link from "next/link";
import { ToolBadge } from "@/components/ToolBadge";
import Image from "next/image";

const TOOLS = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Go",
  "React Native",
  "React",
  "Node.js",
  "Next.js",
  "Tailwind",
  "SQLite",
];

const projects = [
  {
    title: "GitHub Issue Explorer",
    description:
      "A tool for exploring GitHub issues in a specific repo. Paste in a GitHub repo URL to see all issues. Filter by open, closed and pull requests.",
  },
  {
    title: "Python Automated Video Brander",
    description:
      "Python tool that can automatically brand video content with custom intro/outro/watermark. Implemented at UBC Sauder as faculty-facing video post-production service (processed over 850 videos since launch in August 2020).",
  },
  {
    title: "(N)app",
    description:
      "A just-for-fun, not-applicable application (or 'napp'). This site is where I create tools and widgets to explore programming and design concepts.",
  },
  {
    title: "The Archies",
    description:
      "A fictional movie nomination platform lovingly named after my cat Archie. Seach for your favourite films and customize your nomination list up to 5 movies.",
  },
];

export default function Home() {
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
          {TOOLS.map((tool, index) => (
            <ToolBadge key={index} text={tool} />
          ))}
          {TOOLS.map((tool, index) => (
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
        style={{ transform: "translate(40px, 290px)" }}
      />
      <div className="mt-12 grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-matteBlack bg-customBackgroundSecondary shadow-lg rounded-2xl flex flex-column overflow-hidden"
          >
            <div className="bg-accentSecondary w-8 h-full" />
            <div className="p-4">
              <h4 className="text-xl font-semibold mt-2">{project.title}</h4>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-templa mt-10"></div>
    </main>
  );
}
