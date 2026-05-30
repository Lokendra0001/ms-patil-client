"use client";

import React from "react";
import Hero from "@/component/common/Hero";

const ProjectsHero = () => {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Projects" }
  ];

  return (
    <Hero
      tagline="Our Portfolio"
      title="Our Projects"
      bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
      breadcrumbs={crumbs}
    />
  );
};

export default ProjectsHero;
