"use client";

import React from "react";
import Hero from "@/component/common/Hero";

const ContactHero = () => {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Contact Us" }
  ];

  return (
    <Hero
      tagline="Get In Touch"
      title="Contact Us"
      bgImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
      breadcrumbs={crumbs}
    />
  );
};

export default ContactHero;
