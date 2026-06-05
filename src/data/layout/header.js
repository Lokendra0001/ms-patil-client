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
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+91 98765 43210",
  fallback_phone: process.env.NEXT_PUBLIC_FALLBACK_COMPANY_PHONE || "+91 98765 43210",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@mspatilconstruction.com",
  hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  location: "Dhule, Maharashtra",
};
