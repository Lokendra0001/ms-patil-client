"use client";

import React from "react";
import Button from "@/component/common/Button";
import ProjectCard from "@/component/common/ProjectCard";

const FeaturedProjects = () => {
  const projects = [
    {
      id: "3",
      title: "Chalisgaon Highway Bypass Corridor",
      category: "Road Construction",
      location: "Chalisgaon, Maharashtra",
      description: "Construction of a 4-lane bypass road utilizing advanced concrete paving machinery to streamline regional transport.",
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "5",
      title: "Government Polytechnic Academic Complex",
      category: "Infrastructure & Buildings",
      location: "Dhule, Maharashtra",
      description: "Development of a multi-storey academic wing featuring modern laboratory blocks and reinforced structural shells.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "1",
      title: "Integrated RMC & Aggregate Crushing Plant",
      category: "Industrial Facilities",
      location: "Nandurbar, Maharashtra",
      description: "High-capacity plant setup featuring automated batching technology to secure our vertical raw material supply chain.",
      image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="w-full bg-slate-50/10 py-20 lg:py-24 border-b border-slate-100 select-text relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header Block with Symmetrical Spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="flex flex-col items-start max-w-3xl">
            {/* Tagline block */}
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary-light uppercase mb-2 block select-none">
              OUR PORTFOLIO
            </span>
            
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-tight">
              Delivering Infrastructure <span className="text-primary-light-hover">of Significance</span>
            </h2>

            {/* Standard yellow accent line */}
            <div className="w-16 h-1 bg-primary-light mt-4 select-none" />
          </div>

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

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
