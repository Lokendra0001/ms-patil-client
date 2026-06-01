"use client";

import React from "react";
import Link from "next/link";
import Button from "@/component/common/Button";
import Heading from "@/component/common/Heading";
import highway from "../../../public/assets/home/deliver/highway.png";
import industrial from "../../../public/assets/home/hero/banner-2.png";
import concrete from "../../../public/assets/home/deliver/concrete.png";
import Image from "next/image";

const ServicesOverview = () => {
  const primaryServices = [
    {
      num: "01",
      slug: "road-pavement-works",
      title: "Infrastructure & Highways",
      description:
        "Engineering and building high-speed national highway networks, concrete corridor roadways, bypass junctions, and transport channels.",
      image: highway,
    },
    {
      num: "02",
      slug: "industrial-projects",
      title: "Industrial Construction",
      description:
        "Executing heavy structural steelworks, civil foundation layouts, advanced manufacturing complexes, and logistical warehouse parks.",
      image:
    industrial,
    },
    {
      num: "03",
      slug: "material-supply-mfg",
      title: "Ready Mix Concrete (RMC)",
      description:
        "Supplying certified Ready Mix Concrete (RMC) and Fly Ash bricks processed at our vertically integrated manufacturing facilities.",
      image:
       concrete,
    },
  ];

  return (
    <section className="w-full bg-white select-text border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-20 lg:py-24">
        {/* Title block */}
        <Heading
          tagline="What We Deliver"
          title="Multi-Disciplined"
          highlight="Contracting Solutions"
          textColor="text-primary"
          className="!mb-16 max-w-2xl"
        />

        {/* Grid of full-bleed hover panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-slate-200">
          {primaryServices.map((service, idx) => (
            <Link
              key={idx}
              href={`/services/${service.slug}`}
              className="relative overflow-hidden bg-white px-8 py-20 lg:py-24 transition-all duration-500 cursor-pointer flex flex-col justify-between h-[450px] group border-b lg:border-b-0 lg:border-r border-slate-200 last:border-r-0 last:border-b-0"
            >
              {/* Background Project Image (always exists at low opacity, turns colorful on hover) */}
              <Image
                src={service.image}
                alt="services"
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute inset-0 object-cover bg-center transition-all duration-700 ease-out transform scale-105 group-hover:scale-100 opacity-[0.08] group-hover:opacity-100 filter grayscale group-hover:grayscale-0 z-0"
              />
              {/* Morphing Canvas Overlay (White sheet transitions to dark photo overlay) */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-slate-50/90 group-hover:from-slate-950 group-hover:via-slate-900/80 group-hover:to-slate-900/20 transition-all duration-500 z-0" />

              {/* Massive Floating Background Number */}
              <span className="absolute right-6 top-6 text-7xl font-black text-slate-100/90 group-hover:text-white/5 transition-colors duration-500 select-none z-10">
                {service.num}
              </span>

              {/* Foreground content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                {/* Top content */}
                <div>
                  <span className="text-[10px] font-black tracking-widest text-primary-light-hover group-hover:text-primary-light transition-colors duration-300 block mb-6 select-none">
                    SERVICE // {service.num}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-white transition-colors duration-300 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed max-w-xs font-semibold">
                    {service.description}
                  </p>
                </div>

                {/* Bottom link indicator */}
                <span className="text-xs font-black tracking-widest uppercase text-slate-900 group-hover:text-primary-light transition-colors duration-300 inline-flex items-center gap-1.5 mt-8 select-none">
                  Explore Service{" "}
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </span>
              </div>

              {/* Bottom Yellow Accent Expand line */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-primary-light group-hover:w-full transition-all duration-500 z-20" />
            </Link>
          ))}
        </div>

        {/* View All Services Action Button */}
        <div className="mt-16 flex justify-center">
          <Button
            href="/services"
            variant="reverse"
            size="lg"
            className="group uppercase tracking-wider text-xs px-8 py-4 h-auto inline-flex items-center gap-2"
          >
            View All Services{" "}
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
