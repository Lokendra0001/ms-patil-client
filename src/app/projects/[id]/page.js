import React from "react";
import ProjectDetailsView from "@/component/projects/ProjectDetailsView";
import { projectsData } from "@/data/projects";

// Generate static params for Next.js build compilation
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

// Generate dynamic metadata for search engine indexing
export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === String(id));

  if (!project) {
    return {
      title: "Project Not Found | M/S Chetankumar Bhagwan Suryawanshi",
    };
  }

  return {
    title: `${project.title} | M/S Chetankumar Bhagwan Suryawanshi`,
    description: project.description || `Read details and scope of works executed for ${project.title} by PWD Contractor M/S Chetankumar Bhagwan Suryawanshi.`,
  };
}

const page = async ({ params }) => {
  const { id } = await params;
  return <ProjectDetailsView id={id} />;
};

export default page;
