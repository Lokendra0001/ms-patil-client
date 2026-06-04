"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { contactInfo } from "@/data/layout/header";
import Heading from "@/component/common/Heading";

const ProjectDetails = ({ project }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // Map gallery images to format compatible with yet-another-react-lightbox
  const slides = project.gallery.map((imgUrl) => ({
    src:
      typeof imgUrl === "object" && imgUrl !== null && imgUrl.src
        ? imgUrl.src
        : imgUrl,
  }));

  return (
    <section className="w-full py-20 lg:py-24 bg-white-background relative overflow-hidden">
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
        <div className="mb-6 flex items-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-text-primary  hover:text-primary transition-colors uppercase select-text group"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform text-text-primary  group-hover:text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Projects</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT COLUMN: Main specifications and copy */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Back to Projects Button */}

            {/* Featured Project Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50 border border-slate-200/50 mb-10 select-text">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-extrabold text-text-primary mb-5 tracking-tight">
              Project Overview & Execution
            </h3>

            <div className="text-xs sm:text-sm text-text-gray font-normal leading-relaxed space-y-6 max-w-4xl mb-10 select-text">
              <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              <div className="p-6 bg-slate-50 border-l-4 border-primary my-6 rounded-r-xs">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">
                  Scope of Work Executed
                </span>
                <p className="text-xs sm:text-sm text-text-primary font-bold leading-relaxed">
                  {project.scope}
                </p>
              </div>

              <p className="text-xs sm:text-sm">
                The execution phase integrated advanced{" "}
                <strong>{project.technology}</strong> methodologies to ensure
                that all structural elements withstand heavy usage and
                operational stresses over a multi-decade lifecycle. Our project
                management workflow coordinates design constraints, load
                calculations, and site surveys in direct alignment with state
                PWD policies and regulatory codes.
              </p>

              <p className="text-xs sm:text-sm">
                By leveraging M/S Chetankumar Bhagwan Suryawanshi's in-house
                computerized RMC plant supplies, the project benefited from
                high-grade concrete aggregate consistency and seamless
                scheduling. Quality assurance was continuously managed using
                localized testing labs, documenting core compression checks and
                structural sound tests at key transition phases.
              </p>
            </div>

            {/* Highlights Bullet Matrix */}
            <h4 className="text-lg font-bold text-text-primary mb-5 tracking-tight">
              Key Operations & Accomplishments
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10 select-text">
              {project.highlights.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-xs font-medium text-text-gray"
                >
                  <svg
                    className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Secondary Detail Section */}
            <h4 className="text-lg font-bold text-text-primary mb-4 tracking-tight">
              Engineering with Style & Quality
            </h4>
            <p className="text-xs sm:text-sm text-text-gray font-normal leading-relaxed max-w-4xl">
              Every phase of this project underwent rigorous site inspection
              guidelines. From soil consolidation to materials procurement, M/S
              Chetankumar Bhagwan Suryawanshi ensured the deployment of
              qualified site supervisors, precision engineering equipment, and
              state-of-the-art construction standards.
            </p>
          </div>

          {/* RIGHT COLUMN: Info cards & Lead generation sidebar */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Card 1: Project Information Box */}
            <div className="border border-slate-200/60 p-6 bg-slate-50 mb-8 rounded-none select-text">
              <h4 className="text-sm font-extrabold text-text-primary uppercase tracking-wider mb-6 pb-2.5 border-b border-slate-200/60">
                Information About the Project
              </h4>

              <div className="space-y-4.5 mb-8">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-text-primary">
                    {project.location}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                    Client
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-text-primary">
                    {project.client}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                    Category
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-text-primary">
                    {project.category}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                    Technology
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-text-primary">
                    {project.technology}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                    Scope of Work
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-text-primary">
                    {project.scope}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                    Completion Date
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-text-primary">
                    {project.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Contact Callout Box */}
            <div className="bg-slate-50 text-text-white p-6 rounded-none relative overflow-hidden select-text ">
              <h4 className="text-base font-extrabold text-text-primary mb-3 leading-tight tracking-tight">
                Are You Going to Start a new Project?
              </h4>
              <p className="text-xs text-slate-400 font-normal leading-relaxed mb-6">
                Get in touch with our team to discuss your engineering, grading,
                and construction requirements.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 hover:text-primary transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 text-primary-hover hover:text-primary flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-xs font-semibold text-primary-hover hover:text-primary">
                    {contactInfo.phone}
                  </span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 hover:text-primary transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 text-primary flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs font-semibold text-primary-hover hover:text-primary">
                    {contactInfo.email}
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-primary flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-xs font-semibold text-primary-hover hover:text-primary">
                    Pune, Maharashtra
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full border border-primary text-primary hover:bg-primary hover:text-text-primary font-bold text-xs uppercase tracking-widest py-3.5 text-center block transition-all duration-300 mt-8"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Project Gallery Section */}
        <div className="mt-20 lg:mt-24 border-t border-slate-100 pt-16 select-text">
          <Heading
            tagline="Visual Showcase"
            title="Project Photo"
            highlight="Gallery"
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.gallery.map((imgUrl, index) => (
              <div
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className="group relative aspect-video sm:aspect-square overflow-hidden bg-slate-50 border border-slate-200/50 cursor-pointer"
              >
                <Image
                  src={imgUrl}
                  alt={`Project Gallery Image ${index + 1}`}
                  fill
                  className="object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                />
                {/* Hover expansion overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="w-12 h-12 border border-white/25 rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-all duration-300 bg-slate-950/20 backdrop-blur-xs">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <Lightbox
        open={activeImageIndex !== null}
        close={() => setActiveImageIndex(null)}
        index={activeImageIndex !== null ? activeImageIndex : 0}
        slides={slides}
        plugins={[Zoom]}
        zoom={{ scrollToZoom: true, maxZoomPixelRatio: 4 }}
      />
    </section>
  );
};

export default ProjectDetails;
