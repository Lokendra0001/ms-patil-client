"use client";

import React from "react";
import Hero from "./Hero";
import AboutSnippet from "./AboutSnippet";
import Stats from "./Stats";
import ServicesOverview from "./ServicesOverview";
import WhyChooseUs from "./WhyChooseUs";
import FeaturedProjects from "./FeaturedProjects";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import CallToAction from "./CallToAction";

const Index = () => {
  return (
    <main className="w-full flex-grow bg-white">
      {/* Hero Slider Section */}
      <Hero />

      {/* About Us Section */}
      <AboutSnippet />

      {/* Stats Bar Section */}
      <Stats />

      {/* Services Overview Section */}
      <ServicesOverview />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* FAQ Section */}
      <FAQ />


      {/* Gallery Section */}
      <Gallery />

      {/* Call To Action Section */}
      <CallToAction />

      {/* Testimonials Section
      <Testimonials /> */}
      {/* Additional homepage sections can be added here */}
    </main>
  );
};

export default Index;
