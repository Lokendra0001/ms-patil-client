"use client";

import React from "react";
import Link from "next/link";
import ProjectCard from "@/component/common/project/ProjectCard";
import { projectsData } from "@/data/projects";
import Heading from "@/component/common/Heading";

const RelatedProjects = ({ slug }) => {
  const categoryMap = {
    "civil-construction": ["Residential", "Institutional"],
    "road-pavement-works": ["Government"],
    "drainage-water-infra": ["Government"],
    "industrial-projects": ["Industrial"],
    "railway-infrastructure": ["Railway"],
    "material-supply-mfg": ["Industrial"],
  };

  const targetCategories = categoryMap[slug] || [];
  let related = projectsData.filter((p) =>
    targetCategories.includes(p.category),
  );

  // Keyword refinement for services that share high-level categories
  if (slug === "road-pavement-works") {
    related = related.filter(
      (p) =>
        p.title.toLowerCase().includes("highway") ||
        p.title.toLowerCase().includes("road") ||
        p.title.toLowerCase().includes("paving") ||
        p.scope.toLowerCase().includes("paving"),
    );
  } else if (slug === "drainage-water-infra") {
    related = related.filter(
      (p) =>
        p.title.toLowerCase().includes("drainage") ||
        p.title.toLowerCase().includes("sewerage") ||
        p.title.toLowerCase().includes("culvert") ||
        p.scope.toLowerCase().includes("drainage"),
    );
  } else if (slug === "material-supply-mfg") {
    related = related.filter(
      (p) =>
        p.title.toLowerCase().includes("rmc") ||
        p.title.toLowerCase().includes("plant") ||
        p.title.toLowerCase().includes("brick") ||
        p.title.toLowerCase().includes("crusher"),
    );
  }

  // Cap at 3 items
  related = related.slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-t  border-slate-100 select-text">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}

        <Heading
          title={"Related "}
          tagline={"Portfolio Delivered"}
          align="center"
          highlight={"Projects"}
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-10">
          {related.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 border border-gray-400 hover:border-transparent text-text-primary  hover:bg-primary-light hover:text-text-white  font-bold tracking-widest text-xs uppercase transition-all duration-300 rounded"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
