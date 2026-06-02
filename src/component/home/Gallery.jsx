"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/component/CTA/Button";
import Heading from "@/component/common/Heading";
import { categories, galleryItems } from "../../data/home/gallery";

// Import yet-another-react-lightbox and its Zoom plugin
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const displayedItems = isExpanded ? filteredItems : filteredItems.slice(0, 6);

  // Map filteredItems to format compatible with yet-another-react-lightbox
  const slides = filteredItems.map((item) => {
    const src =
      typeof item.image === "object" && item.image !== null
        ? item.image.src
        : item.image;
    return { src };
  });

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
        <Heading
          tagline="VISUAL PORTFOLIO"
          title="Our Project Progress"
          highlight="Gallery"
          align="center"
          textColor="text-primary"
          className="!mb-12"
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 select-text">
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
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
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
          <div className="flex justify-center mt-12 select-text">
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
      <Lightbox
        open={lightboxIndex !== null}
        close={() => setLightboxIndex(null)}
        index={lightboxIndex !== null ? lightboxIndex : 0}
        slides={slides}
        plugins={[Zoom]}
        zoom={{ scrollToZoom: true, maxZoomPixelRatio: 4 }}
      />
    </section>
  );
};

export default Gallery;
