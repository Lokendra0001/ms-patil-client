import React from "react";
import ServicesHero from "./ServicesHero";
import ServicesList from "./ServicesList";
import ServicesCatalogue from "./ServicesCatalogue";
import ServicesProcess from "./ServicesProcess";
import ServicesAssets from "./ServicesAssets";
import ServicesRailway from "./ServicesRailway";

const Index = () => {
  return (
    <main className="w-full grow bg-white-background ">
      <ServicesHero />
      <ServicesList />
      <ServicesCatalogue />
      <ServicesProcess />
      <ServicesRailway />
      <ServicesAssets />
    </main>
  );
};

export default Index;
