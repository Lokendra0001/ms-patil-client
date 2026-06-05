"use client";

import React, { Suspense } from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import ContactDirect from "./ContactDirect";

const Index = () => {
  return (
    <main className="w-full  bg-white-background ">
      <ContactHero />
      <Suspense
        fallback={
          <div className="py-20 text-center text-text-gray  font-mono text-xs uppercase tracking-widest">
            Loading contact console...
          </div>
        }
      >
        <ContactForm />
      </Suspense>
      <ContactMap />
      <ContactDirect />
    </main>
  );
};

export default Index;
