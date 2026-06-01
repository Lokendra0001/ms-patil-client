import SectorDetailPage from "@/component/sectors/slug/Index";

export function generateMetadata({ params }) {
  const slug = params.slug;
  const names = {
    "railway-infrastructure": "Railway Infrastructure",
    "industrial-infrastructure": "Industrial Infrastructure",
    "government-civic": "Government & Civic Infrastructure",
    "residential-institutional": "Residential & Institutional Buildings",
  };
  const title = names[slug] || "Industrial Sector";
  
  return {
    title: `${title} | M/S Chetankumar Bhagwan Suryawanshi`,
    description: `Heavy infrastructure and civil contracting capabilities within the ${title} sector executed by M/S Chetankumar Bhagwan Suryawanshi.`,
  };
}

export default function Page() {
  return <SectorDetailPage />;
}
