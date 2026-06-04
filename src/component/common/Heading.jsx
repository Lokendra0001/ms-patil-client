"use client";

import React from "react";

const Heading = ({
  tagline,
  title,
  highlight,
  description,
  layout = "default", // "default" (stacked) or "split" (side-by-side)
  align = "left", // "left" or "center"
  textColor = "text-text-primary!",
  taglineColor = "text-primary",
  className = "",
  descClassName = "",
}) => {
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const taglineAlign = align === "center" ? "justify-center" : "";

  if (layout === "split") {
    return (
      <div
        className={`flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-border-secondary pb-10 mb-10 lg:mb-16  ${alignClass} ${className}`}
      >
        <div className="max-w-2xl ">
          <div className={`flex items-center gap-3.5 mb-3.5 ${taglineAlign}`}>
            <div className="w-12 h-0.5 bg-primary" />
            <span
              className={`w-full text-xs sm:text-sm font-bold tracking-[0.22em] uppercase ${taglineColor}`}
            >
              {tagline}
            </span>
          </div>
          <h2
            className={` text-3xl sm:text-4.5xl lg:text-[36px] font-extrabold tracking-tight uppercase leading-none ${textColor}`}
          >
            {title}{" "}
            {highlight && <span className="text-primary">{highlight}</span>}
          </h2>
        </div>
        {description && (
          <p
            className={`text-text-gray lg:max-w-2xl leading-relaxed text-sm sm:text-base ${descClassName}`}
          >
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col mb-12 ${alignClass} ${className}`}>
      <div className={`flex items-center gap-3.5 mb-3.5 ${taglineAlign}`}>
        <div className="w-12 h-0.5 bg-primary" />
        <span
          className={`text-xs sm:text-sm font-bold tracking-[0.22em] uppercase ${taglineColor}`}
        >
          {tagline}
        </span>
      </div>
      <h2
        className={`text-3xl sm:text-4xl font-extrabold tracking-tight  leading-tight ${textColor} `}
      >
        {title} {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      <div className="w-16 h-1 bg-primary mt-4 mb-6" />
      {description && (
        <p
          className={`text-text-primary! font-medium mb-8 xl:max-w-2xl text-xs sm:text-sm md:text-base ${descClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
