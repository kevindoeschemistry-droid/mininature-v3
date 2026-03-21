import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Landscaping",
  description: "Design, installation, fundraising, event facilitation, and maintenance for MNR sites.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Landscaping"
      subtitle="Services"
      description="Design, installation, fundraising, event facilitation, and maintenance for MNR sites."
      backLabel="Back to Services"
      backHref="/services"
    />
  );
}
