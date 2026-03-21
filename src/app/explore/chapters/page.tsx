import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Find a Chapter",
  description: "Discover local MiniNature chapters near you and connect with your community.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Find a Chapter"
      subtitle="Explore"
      description="Discover local MiniNature chapters near you and connect with your community."
      backLabel="Back to Explore"
      backHref="/explore"
    />
  );
}
