import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Join Our Newsletter",
  description: "Get monthly stories, plant spotlights, and event updates.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Join Our Newsletter"
      subtitle="Stay Connected"
      description="Get monthly stories, plant spotlights, and event updates."
      backLabel="Back to Stay Connected"
      backHref="/stay-connected"
    />
  );
}
