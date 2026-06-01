"use client";

import React from "react";
import SectorsHero from "./SectorsHero";
import SectorsList from "./SectorsList";
import ServiceCTA from "@/component/services/slug/ServiceCTA";

const Index = () => {
  return (
    <main className="w-full grow bg-white">
      <SectorsHero />
      <SectorsList />
      <ServiceCTA />
    </main>
  );
};

export default Index;
