import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/nutrib.png"
          title="Nutri Label OCR"
          description="Developed an AI-powered SaaS OCR solution using Azure Form Recognizer, Google Cloud Vision, and OpenAI's GPT for improved efficiency and precision."
        />
        <ProjectCard
          src="/dist.png"
          title="Distributed Ledger"
          description="Ledger developed in Java, facilitates digital currency exchanges through a server-based infrastructure,
           utilizing remote procedure calls for streamlined transaction processing."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Portfolio"
          description="A modern, interactive website created with Next.js, TypeScript, and Framer Motion for animations, styled using Tailwind CSS for a sleek, space-themed design."
        />
      </div>
    </div>
  );
};

export default Projects;
