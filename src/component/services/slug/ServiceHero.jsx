"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContentContainer from "@/component/common/ContentContainer";
const renderTitle = (title, highlight) => {
  if (!highlight) return title;
  const index = title.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) return title;
  const before = title.substring(0, index);
  const match = title.substring(index, index + highlight.length);
  const after = title.substring(index + highlight.length);
  return (
    <>
      {before}
      <span className="text-primary">{match}</span>
      {after}
    </>
  );
};

const ServiceHero = ({ data }) => {
  return (
    <main className="w-full flex-grow bg-white-background  select-text">
      {/* 1. Page Header / Banner */}
      <section className="relative bg-slate-950 py-32 sm:py-44 lg:py-52 min-h-[480px] sm:min-h-[560px] lg:min-h-[750px] overflow-hidden flex items-center">
        {/* Background Grayscale Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={data.bgImage}
            alt={data.title}
            fill
            priority
            className="object-cover opacity-45 grayscale-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-slate-950/20 z-10" />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent z-10" /> */}
        </div>

        {/* Content Container */}
        <ContentContainer className="pt-15 relative">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs  font-bold tracking-wider text-slate-400 uppercase mb-6">
            <Link
              href="/"
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <Link
              href="/services"
              className="hover:text-primary transition-colors duration-200"
            >
              Services
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-primary">
              {data.titleLabel || data.title}
            </span>
          </nav>

          {/* Service Name & Tagline */}
          <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-primary uppercase block mb-3 font-mono">
            {data.tagline}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-white  tracking-tight leading-none uppercase mb-6">
            {renderTitle(data.title, data.highlight)}
          </h1>

          {/* Gold Divider Line */}
          <div className="w-20 h-1 bg-red-linear-right-background mb-6" />

          {/* One Line Description */}
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-medium">
            {data.description}
          </p>
        </ContentContainer>
      </section>
    </main>
  );
};

export default ServiceHero;
