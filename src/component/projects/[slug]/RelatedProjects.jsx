"use client";

import React from "react";
import ProjectCard from "@/component/common/project/ProjectCard";
import Heading from "@/component/common/Heading";

const RelatedProjects = ({ otherProjects }) => {
  return (
    <section className="w-full bg-white-background py-20 lg:py-24 border-t border-slate-200/50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <Heading
          tagline="Explore More"
          title="Related"
          highlight="Projects"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
