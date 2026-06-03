"use client";

import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceOverview from "./ServiceOverview";
import RelatedProjects from "./RelatedProjects";
import ServiceCTA from "./ServiceCTA";
import { useParams, notFound } from "next/navigation";

import { servicesData } from "../../../data/services/details";

const Index = ({ slug: propSlug }) => {
  const params = useParams();
  const slug = propSlug || params?.slug;

  const service = servicesData[slug];

  if (!service) {
    notFound();
  }
  return (
    <>
      <ServiceHero data={service} />
      <ServiceOverview data={service} />
      <RelatedProjects slug={slug} />
      <ServiceCTA />
    </>
  );
};

export default Index;
