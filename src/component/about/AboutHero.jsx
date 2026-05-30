"use client";

import React from "react";
import Hero from "@/component/common/Hero";

const AboutHero = () => {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "About" }
  ];

  return (
    <Hero
      tagline="Building Communities"
      title="About"
      bgImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
      breadcrumbs={crumbs}
    />
  );
};

export default AboutHero;
