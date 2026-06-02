"use client";

import React from "react";
import Image from "next/image";
import Heading from "@/component/common/Heading";
import { plants, fleet } from "../../data/services/assets";

const ServicesAssets = () => {
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xl:gap-6">
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
