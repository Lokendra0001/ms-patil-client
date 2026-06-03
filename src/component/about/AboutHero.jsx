"use client";

import React from "react";
import Hero from "@/component/common/hero/Hero";
import banner from "../../../public/assets/about/hero/banner.webp";

const AboutHero = () => {
  const crumbs = [{ name: "Home", href: "/" }, { name: "About Us" }];

  return (
    <Hero
      tagline="Building Communities"
      title="About Us"
      bgImage={banner}
      breadcrumbs={crumbs}
    />
  );
};

export default AboutHero;
