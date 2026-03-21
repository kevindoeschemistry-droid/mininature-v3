import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Legacy Donation",
  description: "Plan a lasting gift to support native habitats for generations.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Legacy Donation"
      subtitle="Give"
      description="Plan a lasting gift to support native habitats for generations."
      backLabel="Back to Give"
      backHref="/give"
    />
  );
}
