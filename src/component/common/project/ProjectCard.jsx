"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  // Ensure fallback description if not present
  const desc =
    project.description ||
    project.workType ||
    "Civil engineering and infrastructure works executed by M/S Chetankumar Bhagwan Suryawanshi.";

  return (
    <div className="relative overflow-hidden group border border-slate-200/60 rounded-none flex flex-col justify-between bg-white-background  transition-all duration-300 min-h-[420px] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
      {/* Image Container with relative constraints */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 select-text">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Category Badge overlay */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-primary text-text-white  text-[10px] tracking-wider uppercase font-bold">
            {project.category}
          </span>
        </div>
      </div>

      {/* Text / Details wrapper */}
      <div className="p-6 flex-grow flex flex-col justify-between relative">
        {/* Bottom expanding yellow hover accent line */}
        <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-primary-light transition-all duration-300 group-hover:w-full" />

        <div>
          {/* Location info */}
          <span className="text-[10px] font-black tracking-wider text-primary-light-hover uppercase mb-1 block select-text">
            {project.location}
          </span>

          {/* Title */}
          <Link
            href={`/projects/${project.id}`}
            className="text-base sm:text-lg font-semibold text-text-primary mb-2 transition-colors duration-300 group-hover:text-primary-hover line-clamp-2"
          >
            {project.title}
          </Link>

          {/* Description */}
          <p className="text-xs sm:text-sm text-text-gray group-hover:text-text-primary font-medium leading-relaxed mb-4 line-clamp-2">
            {desc}
          </p>
        </div>

        {/* Arrow detail footer */}
        <Link
          href={`/projects/${project.id}`}
          className="w-fit mt-4 relative z-10 flex items-center gap-1.5 text-xs font-black tracking-wider uppercase text-slate-400 group-hover:text-primary-hover transition-colors duration-300 select-text"
        >
          <span>Explore Project</span>
          <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
