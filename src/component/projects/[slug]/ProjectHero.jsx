"use client";

import React from "react";
import Hero from "@/component/common/hero/Hero";

const ProjectHero = ({ project }) => {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: project.title },
  ];

  return (
    <Hero
      tagline={project.category}
      title={project.title}
      bgImage={project.image}
      breadcrumbs={crumbs}
    />
  );
};

export default ProjectHero;
