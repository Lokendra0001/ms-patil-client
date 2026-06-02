import React from "react";
import civil from "../../../public/assets/home/hero/banner-2.png";
import industrial from "../../../public/assets/services/hero/service2.png";
import highway from "../../../public/assets/home/deliver/highway.png";
import railway from "../../../public/assets/home/hero/banner-3.png";
import brk from "../../../public/assets/services/our-assets/brk.svg";
import drainage from "../../../public/assets/services/service-catalogue/drainage.png";

export const catalogue = [
  {
    num: "01",
    slug: "civil-construction",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Civil Construction",
    description:
      "RCC structures, foundations, and multi-storey buildings. Complete execution from site preparation to finishing.",
    image: civil,
  },
  {
    num: "02",
    slug: "road-pavement-works",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M21 16V9a1 1 0 00-1-1h-6v8h7z"
        />
      </svg>
    ),
    title: "Road & Pavement Works",
    description:
      "Bituminous and concrete roads with modern paving methods. Durable, high-quality road construction and finishing.",
    image: highway,
  },
  {
    num: "03",
    slug: "drainage-water-infra",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7h-9M4 17h12M4 7h4v10H4zM16 7h4v10h-4z"
        />
      </svg>
    ),
    title: "Drainage & Water Infra",
    description:
      "Stormwater drainage, culverts, and irrigation systems. Efficient water management and infrastructure solutions.",
    image: drainage,
  },
  {
    num: "04",
    slug: "industrial-projects",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    title: "Industrial Projects",
    description:
      "Factory and plant construction with civil and structural works. Designed for heavy-duty industrial operations.",
    image: industrial,
  },
  {
    num: "05",
    slug: "railway-infrastructure",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 4h14M5 10h14M5 16h14M5 22h14M8 2v20M16 2v20"
        />
      </svg>
    ),
    title: "Railway & Infrastructure",
    description:
      "Railway civil works including track beds and drainage. Supporting large-scale infrastructure development.",
    image: railway,
  },
  {
    num: "06",
    slug: "material-supply-mfg",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7l-8-4-8 4 8 4 8-4zm0 5l-8 4-8-4zm0 5l-8 4-8-4z"
        />
      </svg>
    ),
    title: "Material Supply & Mfg",
    description:
      "Ready Mix Concrete, aggregates, and fly ash bricks. Reliable in-house production and consistent supply.",
    image: brk,
  },
];
