export interface Project {
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
  imgPath: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    title: "Python Automated Video Brander",
    description:
      "Python tool that can automatically brand video content with custom intro/outro/watermark. Implemented at UBC Sauder as faculty-facing video post-production service  (processed over 900 videos since launch in August 2020).",
    githubLink: "https://github.com/markoprodanovic/automated-video-brander",
    demoLink: "",
    imgPath: "/camera.png",
    stack: ["Python", "ffmpeg", "SOAP API", "REST API"],
  },
  {
    title: "GitHub Issue Explorer",
    description:
      "A tool for exploring GitHub issues in a specific repo. Paste in a GitHub repo URL to see all issues. Filter by open, closed and pull requests.",
    githubLink: "https://github.com/markoprodanovic/github-issue-explorer",
    demoLink: "https://github-issue-tracker-mp.netlify.app/",
    imgPath: "/magnifying_glass.png",
    stack: ["React", "GitHub API"],
  },
  {
    title: "(N)app",
    description:
      "A just-for-fun, not-applicable application (or 'napp'). This site is where I create tools and widgets to explore programming and design concepts.",
    githubLink: "https://github.com/markoprodanovic/napp",
    demoLink: "https://not-applicable.netlify.app/",
    imgPath: "/n_app.png",
    stack: ["React", "styled-components"],
  },
  {
    title: "The Archies - Movie Nomination App",
    description:
      "A fictional movie nomination platform lovingly named after my cat Archie. Seach for your favourite films and customize your nomination list up to 5 movies.",
    githubLink: "https://github.com/markoprodanovic/the-archies",
    demoLink: "https://the-archies-marko-prodanovic.netlify.app/",
    imgPath: "/trophy.png",
    stack: ["React", "OMDb API"],
  },
];
