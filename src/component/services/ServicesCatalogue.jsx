"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Heading from "@/component/common/Heading";

const ServicesCatalogue = () => {
  const catalogue = [
    {
      num: "01",
      slug: "civil-construction",
      icon: (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Civil Construction",
      description:
        "RCC structures, foundations, and multi-storey buildings. Complete execution from site preparation to finishing.",
      image:
        "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "02",
      slug: "road-pavement-works",
      icon: (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M21 16V9a1 1 0 00-1-1h-6v8h7z"
          />
        </svg>
      ),
      title: "Road & Pavement Works",
      description:
        "Bituminous and concrete roads with modern paving methods. Durable, high-quality road construction and finishing.",
      image:
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "03",
      slug: "drainage-water-infra",
      icon: (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 7h-9M4 17h12M4 7h4v10H4zM16 7h4v10h-4z"
          />
        </svg>
      ),
      title: "Drainage & Water Infra",
      description:
        "Stormwater drainage, culverts, and irrigation systems. Efficient water management and infrastructure solutions.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "04",
      slug: "industrial-projects",
      icon: (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: "Industrial Projects",
      description:
        "Factory and plant construction with civil and structural works. Designed for heavy-duty industrial operations.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "05",
      slug: "railway-infrastructure",
      icon: (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 4h14M5 10h14M5 16h14M5 22h14M8 2v20M16 2v20"
          />
        </svg>
      ),
      title: "Railway & Infrastructure",
      description:
        "Railway civil works including track beds and drainage. Supporting large-scale infrastructure development.",
      image:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "06",
      slug: "material-supply-mfg",
      icon: (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 7l-8-4-8 4 8 4 8-4zm0 5l-8 4-8-4zm0 5l-8 4-8-4z"
          />
        </svg>
      ),
      title: "Material Supply & Mfg",
      description:
        "Ready Mix Concrete, aggregates, and fly ash bricks. Reliable in-house production and consistent supply.",
      image:
        "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50/40 select-none border-t border-slate-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Centered Heading */}
        <Heading
          tagline="Sectors of Operation"
          title="Our Contracting"
          highlight="Catalogue"
          align="center"
          textColor="text-slate-950"
          className="mb-16"
        />

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogue.map((item) => (
            <div
              key={item.num}
              className="flex flex-col bg-white overflow-hidden group border border-gray-200 relative"
            >
              {/* Image Header */}
              <div className="relative h-48 sm:h-70 overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale-[15%] group-hover:scale-105 group-hover:grayscale-[0%] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/20 z-10" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div className="flex gap-4 sm:gap-6 items-start">
                  {/* Dark Blue Square Icon Box */}
                  <div className="w-14 h-14 bg-red-linear-right-background flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>

                  {/* Title & Description */}
                  <div className="grow">
                    <h3 className="text-base sm:text-lg font-semibold text-primary   transition-colors duration-300 group-hover:text-primary-light-hover leading-tight">
                      {item.title}
                    </h3>

                    {/* Yellow line decoration */}
                    <div className="w-12 h-0.5 bg-primary-light mt-2 mb-3.5" />

                    <p className="text-text-gray text-xs sm:text-sm  max-w-sm line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="border-t border-slate-100/80 px-6 sm:px-8 py-4 flex items-center justify-end ">
                <Link
                  href={`/services/${item.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-slate-950  hover:text-primary-light transition-colors duration-200 group/link"
                >
                  View Details
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCatalogue;
