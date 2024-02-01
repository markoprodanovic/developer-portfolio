import type { NextApiRequest, NextApiResponse } from "next";

export function GET() {
  const tools = [
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
  return Response.json(tools);
}
