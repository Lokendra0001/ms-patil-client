"use client";

import React from "react";
import Button from "@/component/CTA/Button";
import ProjectCard from "@/component/common/project/ProjectCard";
import Heading from "@/component/common/Heading";
import { projects } from "../../data/home/featuredProjects";

const FeaturedProjects = () => {
  return (
    <section className="w-full bg-slate-50/10 py-20 lg:py-24 border-b border-slate-100 select-text relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Block with Symmetrical Spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <Heading
            tagline="OUR PORTFOLIO"
            title="Delivering Infrastructure"
            highlight="of Significance"
            textColor="text-primary"
            className="!mb-0 max-w-3xl"
          />

          <div className="shrink-0">
            <Button
              href="/projects"
              variant="reverse"
              size="lg"
              className="uppercase tracking-wider text-xs px-8 py-4 h-auto inline-flex items-center gap-2"
            >
              View All Projects <span>→</span>
            </Button>
          </div>
        </div>

        {/* 6 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
