"use client";

import React from "react";
import Image from "next/image";
import Heading from "@/component/common/Heading";
import rmc from "../../../public/assets/home/hero/banner-1.png";
import crusher from "../../../public/assets/home/deliver/concrete.png";
import brks from "../../../public/assets/services/our-assets/brk.svg";
import sand from "../../../public/assets/services/our-assets/sand.png";
import hitachi from "../../../public/assets/services/our-assets/hitachi.png";
import trucks from "../../../public/assets/services/our-assets/trucks.png";
import roller1 from "../../../public/assets/services/our-assets/roller.png";

const ServicesAssets = () => {
  const plants = [
    {
      index: "01 // MFG",
      stat: "30 CUM/hr",
      name: "RMC Batching Plant",
      detail: "KYB Conmat CP-30",
      image: rmc,
    },
    {
      index: "02 // AGG",
      stat: "200 TPH",
      name: "Stone Crusher Plant",
      detail: "Almeida & Cone Crusher",
      image: crusher,
    },
    {
      index: "03 // SND",
      stat: "Graded Sand",
      name: "Sand Processing",
      detail: "M-Type & P-Type Unit",
      image: sand,
    },
    {
      index: "04 // BRK",
      stat: "In-House",
      name: "Fly Ash Bricks",
      detail: "Manufacturing Unit",
      image: brks,
    },
  ];

  const fleet = [
    {
      index: "01 // EXC",
      stat: "5x Units",
      name: "TATA Hitachi 210",
      detail: "Hydraulic Excavators",
      image: hitachi,
    },
    {
      index: "02 // MXR",
      stat: "10x Units",
      name: "Transit Mixers",
      detail: "7 CUM Concrete Carriers",
      image: trucks,
    },
    {
      index: "03 // PVR",
      stat: "30-Ton Cap",
      name: "Road Paver Train",
      detail: "With Vibro Road Roller",
      image: roller1,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-100 select-text">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <Heading
          tagline="Independent Supply Chain"
          title="In-House Plants &"
          highlight="Machinery Fleet"
          align="center"
          textColor="text-slate-950"
          className="mb-16"
        />

        {/* Manufacturing Plants */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-0.5 w-8 bg-red-linear-right-background" />
            <h3 className="text-xs font-black tracking-widest uppercase text-primary-light font-mono">
              In-House Production Plants
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plants.map((asset) => (
              <div
                key={asset.index}
                className="relative overflow-hidden group aspect-[4/5] bg-slate-900 border-none"
              >
                {/* Full Card Image Background */}
                <Image
                  src={asset.image}
                  alt={asset.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 "
                />

                {/* Visual Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 transition-opacity duration-300 z-10" />

                {/* Minimal Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
                  {/* Top: Monospace Index */}
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                    {asset.index}
                  </span>

                  {/* Bottom: Stat & Title */}
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-red-linear-right-background block tracking-tight mb-1">
                      {asset.stat}
                    </span>
                    <h4 className="text-base font-extrabold uppercase text-white tracking-tight leading-tight">
                      {asset.name}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 font-semibold">
                      {asset.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heavy Equipment Fleet */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-0.5 w-8 bg-red-linear-right-background" />
            <h3 className="text-xs font-black tracking-widest uppercase text-primary-light font-mono">
              Owned Heavy Machinery Fleet
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {fleet.map((asset) => (
              <div
                key={asset.index}
                className="relative overflow-hidden group aspect-[4/3] bg-slate-900 border-none"
              >
                {/* Full Card Image Background */}
                <Image
                  src={asset.image}
                  alt={asset.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />

                {/* Visual Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 transition-opacity duration-300 z-10" />

                {/* Minimal Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
                  {/* Top: Monospace Index */}
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                    {asset.index}
                  </span>

                  {/* Bottom: Stat & Title */}
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-red-linear-right-background block tracking-tight mb-1">
                      {asset.stat}
                    </span>
                    <h4 className="text-base font-extrabold uppercase text-white tracking-tight leading-tight">
                      {asset.name}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 font-semibold">
                      {asset.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-gray text-xs sm:text-sm  max-w-2xl tracking-wide  text-center md:text-left">
            By owning our aggregate source, ready-mix concrete production, sand
            washing, and earthmoving fleet, we eliminate third-party delays,
            guarantee consistency, and transfer cost savings directly to our
            clients.
          </p>
          <div className="flex gap-4 items-center  text-xs text-text-primary font-medium  tracking-wider shrink-0">
            <span>● 100% CONTROL</span>
            <span>● ZERO THIRD-PARTY DEPENDENCY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAssets;
