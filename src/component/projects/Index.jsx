"use client";

import React from "react";
import ProjectsHero from "./ProjectsHero";
import ProjectsList from "./ProjectsList";
import GeographicReach from "./GeographicReach";

const Index = () => {
  return (
    <main className="w-full  bg-white-background ">
      <ProjectsHero />
      <ProjectsList />
      <GeographicReach />
    </main>
  );
};

export default Index;
