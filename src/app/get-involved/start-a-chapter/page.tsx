import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Start a Chapter",
  description: "Lead a local MiniNature chapter and grow the movement in your area.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Start a Chapter"
      subtitle="Get Involved"
      description="Lead a local MiniNature chapter and grow the movement in your area."
      backLabel="Back to Get Involved"
      backHref="/get-involved"
    />
  );
}
