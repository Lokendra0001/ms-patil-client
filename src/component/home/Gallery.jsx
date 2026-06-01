"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/component/common/Button";

// Import all 17 gallery SVG images
import gImg2 from "../../../public/assets/home/gallary-grid/img2.svg";
import gImg3 from "../../../public/assets/home/gallary-grid/img3.svg";
import gImg4 from "../../../public/assets/home/gallary-grid/img4.svg";
import gImg5 from "../../../public/assets/home/gallary-grid/img5.svg";
import gImg6 from "../../../public/assets/home/gallary-grid/img6.svg";
import gImg7 from "../../../public/assets/home/gallary-grid/img7.svg";
import gImg8 from "../../../public/assets/home/gallary-grid/img8.svg";
import gImg9 from "../../../public/assets/home/gallary-grid/img9.svg";
import gImg10 from "../../../public/assets/home/gallary-grid/img10.svg";
import gImg11 from "../../../public/assets/home/gallary-grid/img11.svg";
import gImg12 from "../../../public/assets/home/gallary-grid/img12.svg";
import gImg13 from "../../../public/assets/home/gallary-grid/img13.svg";
import gImg14 from "../../../public/assets/home/gallary-grid/img14.svg";
import gImg15 from "../../../public/assets/home/gallary-grid/img15.svg";
import gImg16 from "../../../public/assets/home/gallary-grid/img16.svg";
import gImg17 from "../../../public/assets/home/gallary-grid/img17.svg";
import gImg18 from "../../../public/assets/home/gallary-grid/img18.svg";
import gImg19 from "../../../public/assets/home/gallary-grid/img19.svg";
import gImg20 from "../../../public/assets/home/gallary-grid/img20.svg";

const Gallery = () => {
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "roads", name: "Roads & Highways" },
    { id: "concrete", name: "RCC & Concrete" },
    { id: "earthworks", name: "Industrial & Earthworks" },
  ];

  const galleryItems = [
    {
      id: 2,
      category: "roads",
      title: "Highway Paving Project",
      description: "",
      image: gImg2,
    },
    {
      id: 3,
      category: "concrete",
      title: "Concrete Foundation Casting",
      description: "",
      image: gImg3,
    },
    {
      id: 4,
      category: "earthworks",
      title: "Industrial Site Grading",
      description: "",
      image: gImg4,
    },
    {
      id: 5,
      category: "roads",
      title: "Sub-grade Asphalt Compaction",
      description: "",
      image: gImg5,
    },
    {
      id: 6,
      category: "concrete",
      title: "Reinforced Slab Construction",
      description: "",
      image: gImg6,
    },
    {
      id: 7,
      category: "earthworks",
      title: "Heavy Earthmoving Fleet",
      description: "",
      image: gImg7,
    },
    {
      id: 8,
      category: "roads",
      title: "National Highway Expansion",
      description: "",
      image: gImg8,
    },
    {
      id: 9,
      category: "concrete",
      title: "Transit Mixer Delivery",
      description: "",
      image: gImg9,
    },
    {
      id: 10,
      category: "earthworks",
      title: "Excavation and Pipeline Trenching",
      description: "",
      image: gImg10,
    },
    {
      id: 11,
      category: "roads",
      title: "PWD Bypass Overpass",
      description: "",
      image: gImg11,
    },
    {
      id: 12,
      category: "concrete",
      title: "Industrial Shed Columns",
      description: "",
      image: gImg12,
    },
    {
      id: 13,
      category: "earthworks",
      title: "Mass Compaction Leveling",
      description: "",
      image: gImg13,
    },
    {
      id: 14,
      category: "roads",
      title: "Road Roller Levelling Works",
      description: "",
      image: gImg14,
    },
    {
      id: 15,
      category: "concrete",
      title: "High-accuracy Trimix Floor",
      description: "",
      image: gImg15,
    },
    {
      id: 16,
      category: "earthworks",
      title: "Warehouse Site Prep",
      description: "",
      image: gImg16,
    },
    {
      id: 17,
      category: "roads",
      title: "Highways Median Casting",
      description: "",
      image: gImg17,
    },
    {
      id: 18,
      category: "concrete",
      title: "Ready-mix RCC Retaining Wall",
      description: "",
      image: gImg18,
    },
    {
      id: 19,
      category: "earthworks",
      title: "Ready-mix RCC Retaining Wall",
      description: "",
      image: gImg19,
    },
    {
      id: 20,
      category: "concrete",
      title: "Ready-mix RCC Retaining Wall",
      description: "",
      image: gImg20,
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const displayedItems = isExpanded ? filteredItems : filteredItems.slice(0, 6);

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
            Our Project Progress{" "}
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
                  setIsExpanded(false);
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
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="relative overflow-hidden aspect-[4/3] group cursor-pointer border border-slate-200/80 bg-slate-50"
            >
              {/* Project Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Zoom Overlay (No text content, just zoom watermark icon) */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <div className="w-12 h-12 border border-white/25 rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-all duration-300 bg-slate-950/20 backdrop-blur-xs">
                  <svg
                    className="w-5 h-5 text-primary-light"
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

        {/* Show More / Show Less Toggle Button */}
        {filteredItems.length > 6 && (
          <div className="flex justify-center mt-12 select-none">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="theme"
              className="px-8 py-3.5 uppercase tracking-wider text-xs font-bold transition-all duration-300"
            >
              {isExpanded
                ? "Show Less"
                : `Load More Projects (${filteredItems.length - 6} More)`}
            </Button>
          </div>
        )}
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

          {/* Large Image Frame (Maximized viewport space, no text caption) */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col justify-center items-center"
            onClick={(e) => e.stopPropagation()} // Prevent click-out close
          >
            <div className="relative w-full h-[80vh] max-h-[80vh] flex justify-center items-center">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                priority
                className="object-contain border border-slate-900 shadow-2xl"
                sizes="(max-width: 1200px) 100vw, 80vw"
              />
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
