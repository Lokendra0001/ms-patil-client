"use client";

import React, { useState } from "react";
import ProjectCard from "@/component/common/ProjectCard";
import { projectsData } from "@/data/projects";

const ProjectsList = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Industrial", "Government", "Institutional", "Railway", "Residential"];

  // Filtering Logic
  const filteredProjects = activeTab === "All"
    ? projectsData
    : projectsData.filter((project) => project.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="w-full bg-white py-20 lg:py-24 relative overflow-hidden select-text">
      
      {/* Blueprint grid watermark */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="currentColor" strokeWidth="1" />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 select-none">
          <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary-light uppercase mb-2">
            Our Work
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-tight">
            Explore Our Projects Portfolio
          </h2>
          <div className="w-16 h-1 bg-primary-light mt-4" />
        </div>

        {/* Category Filters Block with Guide Label */}
        <div className="flex flex-col items-center mb-16 select-none w-full">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
            Filter by Category
          </span>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 border-b border-slate-100 pb-4 w-full max-w-4xl overflow-x-auto scrollbar-none whitespace-nowrap">
            {tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative text-xs font-bold uppercase tracking-widest pb-3 transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "text-primary"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {tab}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary-light" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid (3 Columns, Shared ProjectCard layout) */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="w-full text-center py-16">
            <span className="text-sm font-semibold text-slate-400">
              No projects found in this category.
            </span>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsList;
