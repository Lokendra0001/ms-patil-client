"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import SectorHero from "./SectorHero";
import TechnicalSplit from "./TechnicalSplit";
import CompliancePanel from "./CompliancePanel";
import AssetStrip from "./AssetStrip";
import ServiceCTA from "@/component/services/slug/ServiceCTA";
import { sectorsData } from "@/data/sectors";

const Index = ({ slug: propSlug }) => {
  const params = useParams();
  const slug = propSlug || params?.slug;

  const sector = sectorsData[slug];

  if (!sector) {
    notFound();
  }

  return (
    <>
      <SectorHero data={sector} />
      <TechnicalSplit data={sector} />
      <CompliancePanel data={sector} />
      <AssetStrip data={sector} />
      <ServiceCTA />
    </>
  );
};

export default Index;
