"use client";

import React from "react";
import Button from "@/component/common/Button";

const ServicesOverview = () => {
  const primaryServices = [
    {
      num: "01",
      title: "Infrastructure & Highways",
      description:
        "Engineering and building high-speed national highway networks, concrete corridor roadways, bypass junctions, and transport channels.",
      image:
        "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "02",
      title: "Industrial Construction",
      description:
        "Executing heavy structural steelworks, civil foundation layouts, advanced manufacturing complexes, and logistical warehouse parks.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "03",
      title: "Ready Mix Concrete (RMC)",
      description:
        "Supplying certified Ready Mix Concrete (RMC) and Fly Ash bricks processed at our vertically integrated manufacturing facilities.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="w-full bg-white select-text border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-20 lg:py-24">
        
        {/* Title block - Matched font size & removed uppercase */}
        <div className="max-w-2xl mb-16">
          <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary-light uppercase mb-2 block select-none">
            What We Deliver
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-tight">
            Multi-Disciplined <span className="text-primary-light-hover">Contracting Solutions</span>
          </h2>
          <div className="w-16 h-1 bg-primary-light mt-4 select-none" />
        </div>

        {/* Grid of full-bleed hover panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-slate-200">
          {primaryServices.map((service, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden bg-white px-8 py-20 lg:py-24 transition-all duration-500 cursor-pointer flex flex-col justify-between h-[450px] group border-b lg:border-b-0 lg:border-r border-slate-200 last:border-r-0 last:border-b-0"
            >
              {/* Background Project Image (always exists at low opacity, turns colorful on hover) */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out transform scale-105 group-hover:scale-100 opacity-[0.08] group-hover:opacity-100 filter grayscale group-hover:grayscale-0 z-0"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Morphing Canvas Overlay (White sheet transitions to dark photo overlay) */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-slate-50/90 group-hover:from-slate-950 group-hover:via-slate-900/90 group-hover:to-slate-900/40 transition-all duration-500 z-0" />

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
            </div>
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
