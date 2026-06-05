import mobilization from "../../../public/assets/services/service-process/mobilization.webp";
import survey from "../../../public/assets/services/service-process/survey.webp";
import earthwork from "../../../public/assets/services/service-process/earthwork.webp";
import foundation from "../../../public/assets/home/hero/banner-2.webp";
import structure from "../../../public/assets/home/gallary-grid/img20.webp";
import drainage from "../../../public/assets/services/service-catalogue/drainage.webp";
import road from "../../../public/assets/home/deliver/highway.webp";
import finishing from "../../../public/assets/services/service-process/finishing.webp";
import handover from "../../../public/assets/services/service-process/handover.webp";

export const phases = [
  {
    num: "01",
    name: "Mobilisation",
    title: "Site Mobilisation & Setup",
    description: [
      "Establishing site offices, deploying owned heavy machinery fleet, setting up raw material storage yards, and finalising statutory approvals.",
      "We construct secure storage units, install power/water linkages, and configure temporary offices to coordinate workflows. Preliminary safety zoning, perimeter fencing, and hazard mapping are completed during this phase.",
    ],
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
    description: [
      "Detailed topographic mapping, establishing permanent benchmark reference points, and precise setting out of structural alignments.",
      "Our survey engineers cross-check municipal blueprints against current soil conditions to align layout coordinates. This data forms the base framework for grading, structural piles, and storm drainage layouts.",
    ],
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
    description: [
      "Bulk site cutting and clearing, murum backfilling, and conducting strict Proctor density compaction testing.",
      "Heavy backhoes and graders clear topsoil, shift earthwork volumes, and compress the soil layers. We run continuous compaction test runs to guarantee the foundation bed meets the necessary load capacity.",
    ],
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
    description: [
      "Deep excavation to founding levels, lean concrete blinding, steel binding, and pouring heavy RCC foundations.",
      "Each concrete pour is carefully timed and subjected to compression testing to check structural integrity. Anti-moisture sealants are applied to secure sub-surface structures against early degradation.",
    ],
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
    description: [
      "Concrete production from our in-house RMC plant, erecting columns, beams, structural slabs, and shuttering layouts.",
      "We build precise shuttering systems and position heavy structural columns to support overhead concrete decks. Rigorous reinforcement inspection protocols ensure all tensile elements align with engineering code.",
    ],
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
    description: [
      "Building RDSO box culverts, storm water slab drains, and utility trenching compliant with MJP and MSEDCL norms.",
      "Grading runoff channels prevents water logging and protects structural assets during heavy rains. We run stress tests on pipe joints and drainage outlets before final sand-backfilling is approved.",
    ],
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
    description: [
      "Laying Wet Mix Macadam (WMM) bases, high-traffic bituminous surfaces, and rigid concrete paving using our 30-ton road paver.",
      "Layers of wet mix macadam and granular sub-base are compressed to distribute heavy traffic loads evenly. We finalize road surfaces with high-durability bituminous or concrete paving suited to local industrial needs.",
    ],
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
    description: [
      "Masonry brickwork, boundary wall construction, site cleaning, and institutional gardening/horticulture works.",
      "The vacuum dewatering process extracts excess moisture to increase compressive strength and reduce surface wear. Structural joints are sealed with high-grade industrial elastomers to prevent concrete cracking.",
    ],
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
    description: [
      "Compiling cube test certifications, preparing as-built blueprints, and formal project handover documentation.",
      "We compile all engineering records, as-built drawings, utility layout maps, and official testing reports for the client. A joint site walkthrough is performed to sign off on quality deliverables and close out contracts.",
    ],
    deliverables: [
      "Quality test record sign-off",
      "Client walkthrough review",
      "As-built drawing handover",
    ],
    image: handover,
  },
];
