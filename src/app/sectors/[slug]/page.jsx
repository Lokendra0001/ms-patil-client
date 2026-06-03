import SectorDetailPage from "@/component/sectors/slug/Index";

export async function generateMetadata({ params }) {
  const { slug } = await params;
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

export default async function Page({ params }) {
  const { slug } = await params;
  return <SectorDetailPage slug={slug} />;
}
