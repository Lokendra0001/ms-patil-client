"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/component/common/Button";

const Gallery = () => {
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "roads", name: "Roads & Highways" },
    { id: "concrete", name: "RCC & Concrete" },
    { id: "earthworks", name: "Industrial & Earthworks" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "roads",
      title: "National Highway Bypass",
      description:
        "Complete excavation, grading, and asphalt laying for bypass corridor.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      category: "concrete",
      title: "Trimix Concrete Flooring",
      description:
        "High-accuracy structural concrete flooring for MIDC industrial park warehouses.",
      image:
        "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      category: "earthworks",
      title: "Industrial Earthworks & Grading",
      description:
        "Heavy grading and site preparation using fully-owned crawler excavator fleet.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      category: "roads",
      title: "Asphalt Overlay Resurfacing",
      description:
        "Sub-grade preparation and multi-layer asphalt rolling operations.",
      image:
        "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      category: "concrete",
      title: "RCC Slab Culvert Bridge",
      description:
        "PWD structural slab culvert casting and RDSO-compliant reinforcement grids.",
      image:
        "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      category: "earthworks",
      title: "Industrial PEB Foundations",
      description:
        "Reinforced pile foundations and columns completed for steel structural sheds.",
      image:
        "https://images.unsplash.com/photo-1590348697210-293d37f8e5b2?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (id) => {
    // Find index within the current filtered list
    const index = filteredItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === 0 ? filteredItems.length - 1 : prev - 1,
      );
    }
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === filteredItems.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const currentItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section className="w-full bg-white py-20 lg:py-24 border-t border-slate-200/50 relative overflow-hidden select-text">
      {/* Background graphic wireframes */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="10%"
            y1="0"
            x2="10%"
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
        {/* Header Block (Centered) */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary-light uppercase mb-2 block select-none">
            VISUAL PORTFOLIO
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-tight">
            Our Project{" "}
            <span className="text-primary-light-hover">Gallery</span>
          </h2>
          <div className="w-16 h-1 bg-primary-light mt-4 select-none" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 select-none">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <Button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  setLightboxIndex(null);
                }}
                variant={isActive ? "theme" : "reverse"}
                className="px-5 py-2 text-xs tracking-wider uppercase"
              >
                {cat.name}
              </Button>
            );
          })}
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="relative overflow-hidden aspect-[4/3] group cursor-pointer border border-slate-200/80 bg-slate-50"
            >
              {/* Project Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay Container */}
              <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <span className="text-[9px] uppercase tracking-wider text-primary-light font-black mb-1 select-none">
                  {categories.find((c) => c.id === item.category)?.name}
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                  {item.title}
                </h4>
                <p className="text-[10px] text-slate-300 mt-1 leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Center zoom icon watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                  <svg
                    className="w-4 h-4 text-primary-light"
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

      {/* Lightbox Modal Overlay */}
      {lightboxIndex !== null && currentItem && (
        <div
          className="fixed inset-0 bg-slate-950/95 z-[999] flex items-center justify-center p-4 sm:p-8 select-none"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl font-light hover:text-primary-light transition-colors duration-200 cursor-pointer z-50 p-2"
            aria-label="Close gallery lightbox"
          >
            ✕
          </button>

          {/* Left Navigate Arrow */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-white hover:text-primary-light text-3xl sm:text-4xl p-3 cursor-pointer z-50 transition-colors"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Large Image Frame */}
          <div
            className="relative max-w-5xl max-h-[75vh] w-full h-full flex flex-col justify-center items-center"
            onClick={(e) => e.stopPropagation()} // Prevent click-out close
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-w-full max-h-[65vh] object-contain border border-slate-900 shadow-2xl select-text"
            />

            {/* Caption Panel */}
            <div className="w-full max-w-full mt-4 text-center select-text">
              <span className="text-[9px] uppercase tracking-wider text-primary-light font-black">
                {categories.find((c) => c.id === currentItem.category)?.name}
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-white mt-1">
                {currentItem.title}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 max-w-2xl mx-auto leading-relaxed">
                {currentItem.description}
              </p>
            </div>
          </div>

          {/* Right Navigate Arrow */}
          <button
            onClick={showNext}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-white hover:text-primary-light text-3xl sm:text-4xl p-3 cursor-pointer z-50 transition-colors"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
