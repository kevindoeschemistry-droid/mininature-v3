import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Programs",
  description: "Learn about our programs and initiatives dedicated to restoring native habitats.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Programs"
      subtitle="Explore"
      description="Learn about our programs and initiatives dedicated to restoring native habitats."
      backLabel="Back to Explore"
      backHref="/explore"
    />
  );
}
