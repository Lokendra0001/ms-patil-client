import React from "react";
import AboutHero from "./AboutHero";
import AboutDetails from "./AboutDetails";
import CeoMessage from "./CeoMessage";
import AboutTimeline from "./AboutTimeline";
import AboutPhilosophy from "./AboutPhilosophy";
import Leadership from "./Leadership";

const Index = () => {
  return (
    <main className="w-full  bg-white-background ">
      <AboutHero />
      <AboutDetails />
      <CeoMessage />
      <AboutTimeline />
      <Leadership />
      <AboutPhilosophy />
    </main>
  );
};

export default Index;
