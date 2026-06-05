import Heading from "@/component/common/Heading";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectGallery = ({ project, setIndex }) => {
  return (
    <div className="mt-20 lg:mt-24 border-t border-slate-100 pt-16 select-text">
      <Heading
        tagline="Visual Showcase"
        title="Project Photo"
        highlight="Gallery"
        align="center"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {project.gallery.map((imgUrl, index) => (
          <div
            key={index}
            onClick={() => setIndex(index)}
            className="group relative aspect-video sm:aspect-square overflow-hidden bg-slate-50 border border-slate-200/50 cursor-pointer"
          >
            <Image
              src={imgUrl}
              alt={`Project Gallery Image ${index + 1}`}
              fill
              className="object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
            />
            {/* Hover expansion overlay */}
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
              <div className="w-12 h-12 border border-white/25 rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-all duration-300 bg-slate-950/20 backdrop-blur-xs">
                <Search className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
