import civil from "../../../public/assets/home/hero/banner-2.webp";
import industrial from "../../../public/assets/services/hero/service2.webp";
import highway from "../../../public/assets/home/deliver/highway.webp";
import railway from "../../../public/assets/home/hero/banner-3.webp";
import brk from "../../../public/assets/services/service-catalogue/material.webp";
import drainage from "../../../public/assets/services/service-catalogue/drainage.webp";

export const servicesData = {
  "civil-construction": {
    title: "Civil Construction",
    highlight: "Civil",
    tagline: "RCC Superstructures & Foundations",
    description:
      "Complete structural execution from site excavation and foundation laying to high-rise RCC superstructure construction.",
    bgImage: civil,
    capabilities: [
      {
        name: "RCC Column & Frame Structures",
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "High-Load Footings & Raft Foundations",
        img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Multi-Storey Superstructures",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Structural Glazing & Finishing",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      },
    ],
    machinery:
      "Tata Hitachi Excavators, Computerized RMC Batching Plant, In-house Steel Reinforcement",
    detailedOverview:
      "Leveraging our PWD registration, we execute robust civil works engineered for durability. We coordinate all phases of construction—from geotechnical preparation and earthworks to frame reinforcement and pouring—ensuring compliance with structural designs and regional municipal codes.",
  },
  "road-pavement-works": {
    title: "Road & Pavement Works",
    highlight: "Road & Pavement",
    tagline: "Highways & Heavy-Duty Industrial Paving",
    description:
      "Modern highway, heavy-duty industrial pavement, and bituminous road construction executed to high quality standards.",
    bgImage: highway,
    capabilities: [
      {
        name: "Base Aggregate Layer Layout",
        img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Hot-Mix Bituminous Road Paving",
        img: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Rigid Concrete Highways",
        img: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Traffic Direction Markings",
        img: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&w=600&q=80",
      },
    ],
    machinery:
      "30-Ton Road Paver Finisher, Vibro Road Rollers, Heavy Tipper Transit Fleet",
    detailedOverview:
      "We deliver comprehensive road infrastructure solutions, managing projects from initial site clearance and grading to final bituminous laying. Our team uses automated graders and rollers to achieve precise compaction and gradients matching MoRTH guidelines.",
  },
  "drainage-water-infra": {
    title: "Drainage & Water Infrastructure",
    titleLabel: "Drainage & Water Infra",
    highlight: "Drainage & Water",
    tagline: "Stormwater Systems & Pipelines",
    description:
      "Engineering heavy stormwater drainage, RCC box culverts, agricultural canals, and utility pipelines.",
    bgImage: drainage,
    capabilities: [
      {
        name: "High-Flow RCC Box Culverts",
        img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Stormwater Drainage Channels",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Underground Sewerage Pipelines",
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Agricultural Irrigation Canals",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      },
    ],
    machinery:
      "Hydraulic Line Trenchers, High-Load Excavation Buckets, In-house concrete mixing",
    detailedOverview:
      "We design and build heavy-duty stormwater drainage channels, concrete box culverts, sewerage pipelines, and irrigation systems. Our infrastructure is engineered to withstand flash floods, manage high-volume run-off, and secure water supply lines.",
  },
  "industrial-projects": {
    title: "Industrial Projects",
    highlight: "Industrial",
    tagline: "Factories, Plants & Steel Structures",
    description:
      "Constructing plant foundations, steel structural fabrication, and factory warehouses engineered for heavy-duty operations.",
    bgImage: industrial,
    capabilities: [
      {
        name: "Heavy Machine Foundations",
        img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Structural Steel PEB Assembly",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Industrial Sheds & Warehouses",
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Vacuum Dewatered Trimix Floors",
        img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80",
      },
    ],
    machinery:
      "Trimix Flooring Setup, Industrial Crane Equipment, Concrete Transit Carriers",
    detailedOverview:
      "We build heavy industrial sheds, factories, and warehouses customized for operational machinery. Our expertise includes high-tolerance machine foundation blocks, pre-engineered steel buildings (PEB), and high-durability concrete flooring.",
  },
  "railway-infrastructure": {
    title: "Railway & Infrastructure",
    highlight: "Railway",
    tagline: "RDSO-Compliant Earthworks & Culverts",
    description:
      "Approved railway civil infrastructure works including track bed sub-grades, ballasting, and slope protections.",
    bgImage: railway,
    capabilities: [
      {
        name: "Track Bed & Sub-grade Earthwork",
        img: "https://images.unsplash.com/photo-1579847259730-a048d6ca1f18?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Ballast Bed & Blanket Layer Laying",
        img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "RDSO-Compliant Culverts & Toe Walls",
        img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Stone Pitching & Slope Protection",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
      },
    ],
    machinery:
      "Tata Hitachi Excavators, In-house RMC concrete supply, Heavy Soil Compaction rollers",
    detailedOverview:
      "We carry out railway-adjacent civil works under strict safety and regulatory guidelines. Our teams prepare sub-grade track beds, lay protective blanket layers, and construct headwalls to RDSO and Indian Railways standard specifications.",
  },
  "material-supply-mfg": {
    title: "Material Supply & Mfg",
    titleLabel: "Material Supply & Mfg",
    highlight: "Material",
    tagline: "Concrete, Aggregates & Bricks",
    description:
      "In-house manufacturing and supply of high-grade Ready Mix Concrete (RMC), crushed aggregates, and fly ash bricks.",
    bgImage: brk,
    capabilities: [
      {
        name: "Ready Mix Concrete Production",
        img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Aggregate Crusher Processing",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Graded Sand Washing Operations",
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Fly Ash Brick Manufacturing",
        img: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80",
      },
    ],
    machinery:
      "KYB Conmat CP-30 Batcher, Almeida Crusher Unit, Graded Sand Wash System",
    detailedOverview:
      "We guarantee material quality control by manufacturing our own structural components. Our computerized batching and high-capacity aggregate crusher units produce high-performance concrete, graded sand, and bricks for regional infrastructure needs.",
  },
};
