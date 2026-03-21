import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Trail Maintenance",
  description: "Trail upkeep, restoration, and improvement services.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Trail Maintenance"
      subtitle="Services"
      description="Trail upkeep, restoration, and improvement services."
      backLabel="Back to Services"
      backHref="/services"
    />
  );
}
