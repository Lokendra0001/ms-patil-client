import banner1 from "../../../public/assets/home/hero/banner-1.webp";
import banner2 from "../../../public/assets/home/hero/banner-2.webp";
import banner3 from "../../../public/assets/home/hero/banner-3.webp";

export const slides = [
  {
    image: banner1,
    subtitle: "VERTICALLY INTEGRATED CONTRACTING",
    titleText: "20+ YEARS OF ENGINEERING EXCELLENCE FROM ",
    titleHighlight: "SOURCE TO STRUCTURE",
    description:
      "M/S Chetankumar Bhagwan Suryawanshi is a registered PWD Class IV infrastructure contractor delivering high-compliance civil works across 5 states with zero third-party material dependency.",
    primaryBtn: { text: "Our Capabilities", href: "/services" },
    secondaryBtn: { text: "Get in Touch", href: "/contact" },
  },
  {
    image: banner2,
    subtitle: "HEAVY INDUSTRIAL CIVIL SPECIALISTS",
    titleText: "RCC, CONCRETE WORKS &  ",
    titleHighlight: "INFRASTRUCTURE EXCELLENCE",
    description:
      "Engineering heavy-duty concrete layouts, precision Trimix industrial flooring, slab drains, and robust foundations for industrial complexes and government infrastructure across India.",
    primaryBtn: { text: "Explore Services", href: "/services" },
    secondaryBtn: { text: "Contact Us", href: "/contact" },
  },
  {
    image: banner3,
    subtitle: "HIGH-COMPLIANCE SECTOR CAPABILITY",
    titleText: "APPROVED RAILWAY & ",
    titleHighlight: "CIVIC INFRASTRUCTURE",
    description:
      "Executing strict RDSO-compliant cross-drainage networks, bulk earthworks, and municipal road corridors driven entirely by our owned heavy machinery fleet and in-house material manufacturing plants.",
    primaryBtn: { text: "Our Projects", href: "/projects" },
    secondaryBtn: {
      text: "View Sector Expertise",
      href: "/sectors/railway-infrastructure",
    },
  },
];
