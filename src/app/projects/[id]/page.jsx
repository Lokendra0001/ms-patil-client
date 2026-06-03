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
  const project = projectsData.find((p) => p.id === String(id));

  const jsonLd = project ? {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "creator": {
      "@type": "LocalBusiness",
      "name": "M/S Chetankumar Bhagwan Suryawanshi",
      "alternateName": "Ms Patil Construction",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhule",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "locationCreated": {
      "@type": "Place",
      "name": project.location
    }
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ProjectDetailsView id={id} />
    </>
  );
};

export default page;
