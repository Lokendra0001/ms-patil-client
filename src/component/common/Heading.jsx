"use client";

import React from "react";

const Heading = ({
  tagline,
  title,
  highlight,
  description,
  layout = "default", // "default" (stacked) or "split" (side-by-side)
  align = "left", // "left" or "center"
  textColor = "text-slate-950",
  taglineColor = "text-primary-light",
  className = "",
}) => {
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const taglineAlign = align === "center" ? "justify-center" : "";

  if (layout === "split") {
    return (
      <div
        className={`flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-10 mb-16 ${alignClass} ${className}`}
      >
        <div className="max-w-2xl">
          <div className={`flex items-center gap-3.5 mb-3.5 ${taglineAlign}`}>
            <div className="w-12 h-0.5 bg-primary-light" />
            <span
              className={`text-xs sm:text-sm font-bold tracking-[0.22em] uppercase ${taglineColor}`}
            >
              {tagline}
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4.5xl lg:text-[36px] font-extrabold tracking-tight uppercase leading-none ${textColor}`}
          >
            {title}{" "}
            {highlight && (
              <span className="text-primary-light-hover">{highlight}</span>
            )}
          </h2>
        </div>
        {description && (
          <p className="text-slate-600 max-w-md leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col mb-12 ${alignClass} ${className}`}>
      <div className={`flex items-center gap-3.5 mb-3.5 ${taglineAlign}`}>
        <div className="w-12 h-0.5 bg-primary-light" />
        <span
          className={`text-xs sm:text-sm font-bold tracking-[0.22em] uppercase ${taglineColor}`}
        >
          {tagline}
        </span>
      </div>
      <h2
        className={`text-2xl sm:text-4xl font-extrabold tracking-tight  leading-tight ${textColor}`}
      >
        {title}{" "}
        {highlight && (
          <span className="text-primary-light-hover">{highlight}</span>
        )}
      </h2>
      <div className="w-16 h-1 bg-primary-light mt-4 mb-6" />
      {description && (
        <p className="text-slate-600 max-w-md leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
