"use client";

import React from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import ContactDirect from "./ContactDirect";

const Index = () => {
  return (
    <main className="w-full flex-grow bg-white">
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <ContactDirect />
    </main>
  );
};

export default Index;
