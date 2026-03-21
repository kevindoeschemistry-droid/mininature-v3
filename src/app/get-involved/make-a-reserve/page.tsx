import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Make a Reserve",
  description: "Turn any space into native habitat. We provide the plants, training, and support.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Make a Reserve"
      subtitle="Get Involved"
      description="Turn any space into native habitat. We provide the plants, training, and support."
      backLabel="Back to Get Involved"
      backHref="/get-involved"
    />
  );
}
