import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Weed Abatement",
  description: "Invasive species management and weed abatement services.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Weed Abatement"
      subtitle="Services"
      description="Invasive species management and weed abatement services."
      backLabel="Back to Services"
      backHref="/services"
    />
  );
}
