"use client";

import React from "react";
import Hero from "@/component/common/hero/Hero";
import banner from "../../../public/assets/services/hero/service2.webp";

const ProjectsHero = () => {
  const crumbs = [{ name: "Home", href: "/" }, { name: "Projects" }];

  return (
    <Hero
      tagline="Our Portfolio"
      title="Our Projects"
      bgImage={banner}
      breadcrumbs={crumbs}
    />
  );
};

export default ProjectsHero;
