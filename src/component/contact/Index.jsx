"use client";

import React, { Suspense } from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import ContactDirect from "./ContactDirect";

const Index = () => {
  return (
    <main className="w-full flex-grow bg-white">
      <ContactHero />
      <Suspense fallback={<div className="py-20 text-center text-slate-500 font-mono text-xs uppercase tracking-widest">Loading contact console...</div>}>
        <ContactForm />
      </Suspense>
      <ContactMap />
      <ContactDirect />
    </main>
  );
};

export default Index;
