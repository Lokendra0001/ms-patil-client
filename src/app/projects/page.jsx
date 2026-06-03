import React from 'react'
import Projects from "@/component/projects/Index"
import { META } from "@/config/constant";

import { projectsData } from "@/data/projects";

export const metadata = {
  title: META.PROJECT.title,
  description: META.PROJECT.description,
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": META.PROJECT.title,
    "description": META.PROJECT.description,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projectsData.slice(0, 20).map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://mspatilconstruction.com/projects/${project.id}`,
        "name": project.title
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Projects />
    </>
  )
}

export default page
