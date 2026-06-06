import railway from "../../public/assets/home/hero/banner-3.webp";
import indus from "../../public/assets/services/hero/service2.webp";
import government from "../../public/assets/services/hero/service7.webp";
import residential from "../../public/assets/home/hero/banner-1.webp";
import hitachi from "../../public/assets/services/our-assets/hitachi.webp";
import roller from "../../public/assets/services/our-assets/roller.webp";
import sand from "../../public/assets/services/our-assets/sand.webp";
import rmc from "../../public/assets/home/hero/banner-1.webp";

export const sectorsData = {
  "railway-infrastructure": {
    slug: "railway-infrastructure",
    name: "Railway & Airport Civil Infrastructure",
    highlight: "Railway & Airport",
    badge: "RDSO & Airside Approved",
    overview:
      "Executing bulk earthworks, track bed layouts, high-grade airside rigid pavement foundations, and critical cross-drainage infrastructure.",
    image: railway,
    scope: {
      punchlines: [
        "Bulk earthwork cutting and filling to achieve precise runway and track bed gradients.",
        "Track surface and airfield civil works including ballast beds and aggregate base layouts.",
        "RDSO-compliant heavy-duty RCC box culverts and high-capacity storm-water channels.",
        "Slope protection through RCC toe walls, masonry retaining walls, and perimeter security walls.",
      ],
      reference: {
        client: "HEIGL Infra Limited",
        location: "Rajasthan, India",
        project: "Indian Railways Civil Infrastructure Project (Airport Extensible)",
        verification:
          "Executed near active lines with dedicated safety marshals and full engineering sign-off.",
      },
    },
    compliance: [
      {
        title: "IRUSS Specifications",
        desc: "Indian Railways Unified Standard Specifications",
      },
      {
        title: "RDSO Standard Drawings",
        desc: "Approved Cross-Drainage & Culvert Designs",
      },
      {
        title: "IS:456 & IS:1904",
        desc: "Plain, Reinforced Concrete, and Foundation Structural Standards",
      },
    ],
    asset: {
      focus: "TATA Hitachi 210 Super Excavators",
      text: "Deploying our owned fleet of 5x 20-tonne class excavators with hydraulic rock breakers to blast through hard geological formations within tight track possession windows.",
      image: hitachi,
    },
  },
  "industrial-infrastructure": {
    slug: "industrial-infrastructure",
    name: "Industrial & Chemical Plant Civil Works",
    highlight: "Industrial & Chemical",
    badge: "MIDC Registered Complex Works",
    overview:
      "Engineering heavy-load foundations, precision-leveled floorings, and structural perimeters for demanding manufacturing and chemical complexes.",
    image: indus,
    scope: {
      punchlines: [
        "High-precision, heavy-load Trimix concrete flooring with controlled water-cement ratios.",
        "Heavy Pre-Engineered Building (PEB) structure foundations and precision anchor bolt installations.",
        "Massive structural boundary security walls with integrated RCC columns and plinth beams.",
        "Deep site development excavation, concrete block trenching, and complex storm-water channels.",
      ],
      reference: {
        client: "RM Chemical / Indo Amines Ltd",
        location: "MIDC Dhule, Maharashtra",
        project: "Industrial Plant Civil Works & Warehouse Foundations",
        verification:
          "Also serving Arihant Detergents, RMJ Veritable, and RMPCL Indore plants.",
      },
    },
    compliance: [
      {
        title: "IS:456 Concrete Code",
        desc: "Plain and Reinforced Concrete Framework Standard",
      },
      {
        title: "IS:2386 Sieve Analysis",
        desc: "Aggregate Gradation & Flakiness Index Testing",
      },
      {
        title: "IS:383 Aggregates",
        desc: "Coarse and Fine Aggregate Quality Benchmarks",
      },
    ],
    asset: {
      focus: "KYB Conmat CP-30 RMC Plant",
      text: "Our fully computerised 30 CUM/hr Ready Mix Concrete plant ensures continuous pours of high-grade M5 to M40 mix designs with full electronic batch logs.",
      image: rmc,
    },
  },
  "government-civic": {
    slug: "government-civic",
    name: "Government, Civic & Institutional Infrastructure",
    highlight: "Institutional Infrastructure",
    badge: "PWD Class IV Contractor",
    overview:
      "Delivering municipal asphalt roads, canal infrastructure, and multi-state water grid piping under rigid statutory inspection rules.",
    image: government,
    scope: {
      punchlines: [
        "Complete highway and municipal road layouts utilizing bituminous concrete (BC) and WMM.",
        "Bulk water supply distribution (MJP) and heavy-duty utility electrical pipeline trenching (MSEDCL).",
        "Irrigation canal structures, concrete slab drains, and regional drainage networks.",
        "Paver block laying, masonry finishing, and extensive civic landscape site grading.",
      ],
      reference: {
        client: "Municipal Corporation & ZP Dhule",
        location: "Maharashtra, India",
        project: "Asphalt Pavement Networks & Minor Irrigation Canals",
        verification:
          "Partnered with Maharashtra Jeevan Pradhikaran (MJP) and MSEDCL utility frameworks.",
      },
    },
    compliance: [
      {
        title: "MORT&H Specifications",
        desc: "Ministry of Road Transport & Highways Benchmarks",
      },
      {
        title: "IS:4926 RMC Quality",
        desc: "Ready Mix Concrete Manufacturing Standards",
      },
      {
        title: "IRUSS Road Norms",
        desc: "Unified Government Road Design Compliance",
      },
    ],
    asset: {
      focus: "30-Ton Road Paver Train & Rollers",
      text: "Laying Dense Bituminous Macadam (DBM) smoothly with our 30-ton asphalt paver finisher and heavy vibratory compaction rollers.",
      image: roller,
    },
  },
  "residential-institutional": {
    slug: "residential-institutional",
    name: "Institutional & Residential Structural Frameworks",
    highlight: "Institutional & Residential",
    badge: "High-Compressive Certified",
    overview:
      "Constructing multi-storey educational campuses and large-scale residential masonry frameworks using premium, in-house processed building products.",
    image: residential,
    scope: {
      punchlines: [
        "Multi-storey RCC frame building construction including columns, structural beams, and slabs.",
        "High-volume, structurally uniform masonry works utilizing eco-friendly structural brick units.",
        "Precision formwork, scaffolding erection, steel binding, and concrete reinforcement.",
        "Integrated structural finishing, site development, perimeter fencing, and horticulture layouts.",
      ],
      reference: {
        client: "Podar International School",
        location: "Mumbai / Dhule, India",
        project: "Multi-Storey Academic Campus Frameworks",
        verification:
          "Also successfully delivered civil infrastructure blocks for MPKV College of Agriculture.",
      },
    },
    compliance: [
      {
        title: "IS:12894 Brick Codes",
        desc: "Fly Ash Masonry Structural Compressive Specifications",
      },
      {
        title: "IS:516 Strength Testing",
        desc: "7-Day and 28-Day Concrete Cube Compression Audits",
      },
      {
        title: "IS:1904 Foundations",
        desc: "Structural Design Code for Building Foundations",
      },
    ],
    asset: {
      focus: "Captive Brick & Sand Processing Units",
      text: "Backed by our 200 TPH Crusher, graded M-Type structural sand plant, and in-house Fly Ash Brick factory producing bricks exceeding >7.5 MPa strength.",
      image: sand,
    },
  },
};