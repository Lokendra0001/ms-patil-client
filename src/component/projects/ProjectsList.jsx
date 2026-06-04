"use client";

import React, { useState } from "react";
import ProjectCard from "@/component/common/project/ProjectCard";
import { projectsData } from "@/data/projects";
import Heading from "@/component/common/Heading";

const ProjectsList = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Industrial",
    "Government",
    "Institutional",
    "Railway",
    "Residential",
  ];

  // Filtering Logic
  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter(
          (project) =>
            project.category.toLowerCase() === activeTab.toLowerCase(),
        );

  return (
    <section className="w-full bg-white-background  py-20 lg:py-24 relative overflow-hidden select-text">
      {/* Blueprint grid watermark */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none select-text">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="20%"
            y1="0"
            x2="20%"
            y2="100%"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="80%"
            y1="0"
            x2="80%"
            y2="100%"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <Heading
          tagline="Our Work"
          title="Explore Our Projects"
          highlight="Portfolio"
          align="center"
          className="mb-5!"
        />

        {/* Category Filters Block with Guide Label */}
        <div className="flex flex-col items-center mb-16 select-text w-full">
          <span className="text-[10px] font-bold text-text-gray/80 uppercase tracking-widest mb-3">
            Filter by Category
          </span>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 border-b border-border-secondary pb-4 w-full max-w-4xl overflow-x-auto scrollbar-none whitespace-nowrap">
            {tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative text-xs font-bold uppercase tracking-widest pb-3 transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "text-primary"
                      : "text-text-gray/80 hover:text-text-primary"
                  }`}
                >
                  {tab}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid (3 Columns, Shared ProjectCard layout) */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 ">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="w-full text-center py-16">
            <span className="text-sm font-semibold text-text-gray">
              No projects found in this category.
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
