import mobilization from "../../../public/assets/services/service-process/mobilization.png";
import survey from "../../../public/assets/services/service-process/survey.jpg";
import earthwork from "../../../public/assets/services/service-process/earthwork.svg";
import foundation from "../../../public/assets/home/hero/banner-2.png";
import structure from "../../../public/assets/home/gallary-grid/img20.svg";
import drainage from "../../../public/assets/services/service-catalogue/drainage.png";
import road from "../../../public/assets/home/deliver/highway.png";
import finishing from "../../../public/assets/services/service-process/finishing.png";
import handover from "../../../public/assets/services/service-process/handover.jpg";

export const phases = [
  {
    num: "01",
    name: "Mobilisation",
    title: "Site Mobilisation & Setup",
    description:
      "Sourcing and deploying heavy machinery, assembling our team of civil engineers, establishing temporary base yards, and securing early material supply channels.",
    deliverables: [
      "Temporary site office setup",
      "Machinery transit & placement",
      "Raw materials storage yards",
    ],
    image: mobilization,
  },
  {
    num: "02",
    name: "Survey",
    title: "Topographic Survey & Layout",
    description:
      "Executing precise land measurements, boundary mapping, and excavation markings using advanced differential GPS (DGPS) and total stations.",
    deliverables: [
      "Precision boundary layout",
      "Topographic contour maps",
      "Excavation grid markers",
    ],
    image: survey,
  },
  {
    num: "03",
    name: "Earthwork",
    title: "Excavation & Ground Preparation",
    description:
      "Performing bulk excavation, cut-and-fill operations, subgrade leveling, and active soil stabilization to prepare a solid building bed.",
    deliverables: [
      "Bulk ground excavation",
      "Soil density & compaction test",
      "Level grading & subgrade prep",
    ],
    image: earthwork,
  },
  {
    num: "04",
    name: "Foundation",
    title: "RCC Foundations & Footings",
    description:
      "Drilling foundation piles, building reinforcement rebar cages, and pouring high-performance concrete to secure the load-bearing foundation.",
    deliverables: [
      "Piling & micro-piles installation",
      "Steel reinforcement tying",
      "Foundations concrete pouring",
    ],
    image: foundation,
  },
  {
    num: "05",
    name: "Structure",
    title: "RCC & Structural Framework",
    description:
      "Constructing vertical support columns, beams, multi-level slab formwork, and assembling pre-engineered steel frames (PEB).",
    deliverables: [
      "RCC column & beam frames",
      "Roof & floor slab casting",
      "PEB structure assembly",
    ],
    image: structure,
  },
  {
    num: "06",
    name: "Drainage",
    title: "Water Management & Utilities",
    description:
      "Laying underground stormwater pipelines, run-off channels, cross-drainage culverts, and containment systems to secure the site against water.",
    deliverables: [
      "Stormwater drainage pipeline",
      "Reinforced box culverts",
      "Utility containment conduits",
    ],
    image: drainage,
  },
  {
    num: "07",
    name: "Roads",
    title: "Road Base & Asphalt Paving",
    description:
      "Laying WMM/GSB stone aggregates, primary bituminous coating, and finishing concrete or hot-mix asphalt overlays for internal and main roads.",
    deliverables: [
      "Crushed aggregate base lay",
      "Asphalt/concrete pavement",
      "Curb stones & gutters",
    ],
    image: road,
  },
  {
    num: "08",
    name: "Finishing",
    title: "Trimix Flooring & Finishing",
    description:
      "Executing specialized Vacuum Dewatered Flooring (Trimix), external building plastering, joint seals, and traffic layout markings.",
    deliverables: [
      "Trimix floor finish",
      "External plastering & sealant",
      "Road signage & layouts",
    ],
    image: finishing,
  },
  {
    num: "09",
    name: "Handover",
    title: "Inspections & Client Handover",
    description:
      "Conducting rigorous material strength certifications, structural compliance reviews, safety clearing, and final client key handover.",
    deliverables: [
      "Quality test record sign-off",
      "Client walkthrough review",
      "As-built drawing handover",
    ],
    image: handover,
  },
];
