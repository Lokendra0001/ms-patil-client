"use client";

import React from "react";
import Hero from "@/component/common/hero/Hero";
import banner from "../../../public/assets/contact/hero/banner.webp";

const ContactHero = () => {
  const crumbs = [{ name: "Home", href: "/" }, { name: "Contact Us" }];

  return (
    <Hero
      tagline="Get In Touch"
      title="Contact Us"
      bgImage={banner}
      breadcrumbs={crumbs}
    />
  );
};

export default ContactHero;
