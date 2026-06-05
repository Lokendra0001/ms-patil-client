"use client";

import React from "react";
import Button from "@/component/CTA/Button";
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
    related = related.filter((p) => {
      const searchStr = `${p.title} ${p.scope}`.toLowerCase();
      return (
        searchStr.includes("road") ||
        searchStr.includes("highway") ||
        searchStr.includes("pave") ||
        searchStr.includes("paver")
      );
    });
  } else if (slug === "drainage-water-infra") {
    related = related.filter((p) => {
      const searchStr = `${p.title} ${p.scope}`.toLowerCase();
      return (
        searchStr.includes("drainage") ||
        searchStr.includes("sewerage") ||
        searchStr.includes("culvert") ||
        searchStr.includes("water") ||
        searchStr.includes("irrigation") ||
        searchStr.includes("canal") ||
        searchStr.includes("supply")
      );
    });
  } else if (slug === "material-supply-mfg") {
    related = related.filter((p) => {
      const searchStr = `${p.title} ${p.scope}`.toLowerCase();
      return (
        searchStr.includes("rmc") ||
        searchStr.includes("plant") ||
        searchStr.includes("brick") ||
        searchStr.includes("crusher") ||
        searchStr.includes("concrete") ||
        searchStr.includes("material")
      );
    });
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
          <Button href="/projects" variant="header" size="md">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
