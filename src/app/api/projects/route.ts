export interface Project {
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
  stack: string[];
}

export function GET() {
  const projects: Project[] = [
    {
      title: "Python Automated Video Brander",
      description:
        "Python tool that can automatically brand video content with custom intro/outro/watermark. Implemented at UBC Sauder as faculty-facing video post-production service  (processed over 850 videos since launch in August 2020).",
      githubLink: "https://github.com/markoprodanovic/automated-video-brander",
      demoLink: "",
      stack: ["Python", "ffmpeg", "Panopto SOAP API", "Panopto REST API"],
    },
    {
      title: "GitHub Issue Explorer",
      description:
        "A tool for exploring GitHub issues in a specific repo. Paste in a GitHub repo URL to see all issues. Filter by open, closed and pull requests.",
      githubLink: "https://github.com/markoprodanovic/github-issue-explorer",
      demoLink: "https://github-issue-tracker-mp.netlify.app/",
      stack: ["React", "GitHub API"],
    },
    {
      title: "(N)app",
      description:
        "A just-for-fun, not-applicable application (or 'napp'). This site is where I create tools and widgets to explore programming and design concepts.",
      githubLink: "https://github.com/markoprodanovic/napp",
      demoLink: "https://not-applicable.netlify.app/",
      stack: ["React", "styled-components"],
    },
    {
      title: "The Archies - Movie Nomination App",
      description:
        "A fictional movie nomination platform lovingly named after my cat Archie. Seach for your favourite films and customize your nomination list up to 5 movies.",
      githubLink: "https://github.com/markoprodanovic/the-archies",
      demoLink: "https://the-archies-marko-prodanovic.netlify.app/",
      stack: ["React", "OMDb API"],
    },
  ];
  return Response.json(projects);
}
