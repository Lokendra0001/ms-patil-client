"use client";

import React from "react";
import Link from "next/link";
import ProjectHero from "./ProjectHero";
import ProjectDetails from "./ProjectDetails";
import RelatedProjects from "./RelatedProjects";
import { projectsData } from "@/data/projects";

const Index = ({ id }) => {
  const project = projectsData.find((p) => p.id === String(id));

  if (!project) {
    return (
      <main className="w-full  bg-white-background py-24 text-center">
        <h2 className="text-xl font-bold text-primary mb-4">
          Project Not Found
        </h2>
        <Link
          href="/projects"
          className="text-sm font-bold text-primary hover:underline"
        >
          Return to Projects
        </Link>
      </main>
    );
  }

  // Get other projects to display at the bottom (exclude current project)
  const otherProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <main className="w-full  bg-white-background select-text">
      <ProjectHero project={project} />
      <ProjectDetails project={project} />
      <RelatedProjects otherProjects={otherProjects} />
    </main>
  );
};

export default Index;
