import { CONTACT_INFO } from "@/config/constant";

export const sectors = [
  {
    name: "Railway Infrastructure",
    href: "/sectors/railway-infrastructure",
    code: "RLY",
  },
  {
    name: "Industrial Infrastructure",
    href: "/sectors/industrial-infrastructure",
    code: "IND",
  },
  {
    name: "Government & Civic",
    href: "/sectors/government-civic",
    code: "GOV",
  },
  {
    name: "Residential & Institutional",
    href: "/sectors/residential-institutional",
    code: "RSD",
  },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Sectors", href: "#" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export const contactInfo = {
  phone: CONTACT_INFO.phone,
  fallback_phone: CONTACT_INFO.fallback_phone,
  email: CONTACT_INFO.email,
  hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  location: "Dhule, Maharashtra",
};

