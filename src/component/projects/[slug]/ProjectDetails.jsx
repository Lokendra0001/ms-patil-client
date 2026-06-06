"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { contactInfo } from "@/data/layout/header";
import Heading from "@/component/common/Heading";
import {
  ArrowLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Search,
} from "lucide-react";
import ProjectGallery from "./ProjectGallery";

const ProjectDetails = ({ project }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // Map gallery images to format compatible with yet-another-react-lightbox
  const slides = project.gallery.map((imgUrl) => ({
    src:
      typeof imgUrl === "object" && imgUrl !== null && imgUrl.src
        ? imgUrl.src
        : imgUrl,
  }));

  const contactItems = [
    {
      href: `tel:${contactInfo.phone.replace(/\s+/g, "")}`,
      icon: (
        <Phone className="w-4 h-4 text-primary-hover hover:text-primary flex-shrink-0" />
      ),
      label: contactInfo.phone,
    },
    {
      href: `mailto:${contactInfo.email}`,
      icon: (
        <Mail className="w-4 h-4 text-primary-hover hover:text-primary flex-shrink-0" />
      ),
      label: contactInfo.email,
    },
    {
      href: null,
      icon: <MapPin className="w-4 h-4 text-primary flex-shrink-0" />,
      label: "Dhule, Maharashtra",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-24 bg-white-background relative overflow-hidden">
      {/* Blueprint grid watermark */}

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-6 flex items-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-text-primary  hover:text-primary transition-colors uppercase select-text group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform text-text-primary  group-hover:text-primary" />
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
                  <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
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
                {contactItems.map((item, idx) => {
                  if (item.href) {
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-3 hover:text-primary transition-colors duration-200 min-w-0"
                      >
                        {item.icon}
                        <span
                          className={`text-xs text-text-primary hover:text-primary-hover font-medium break-all`}
                        >
                          {item.label}
                        </span>
                      </a>
                    );
                  }
                  return (
                    <div key={idx} className="flex items-center gap-3 min-w-0">
                      {item.icon}
                      <span
                        className={`text-xs text-text-primary hover:text-primary-hover font-medium break-all`}
                      >
                        {item.label}
                      </span>
                    </div>
                  );
                })}
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

        <ProjectGallery project={project} setIndex={setActiveImageIndex} />
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
