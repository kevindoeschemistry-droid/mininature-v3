import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Memorial Giving",
  description: "Honor a loved one with a gift that restores native habitat.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Memorial Giving"
      subtitle="Give"
      description="Honor a loved one with a gift that restores native habitat."
      backLabel="Back to Give"
      backHref="/give"
    />
  );
}
