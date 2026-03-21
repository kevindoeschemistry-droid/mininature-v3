import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Consulting",
  description: "Expert guidance and planning for native habitat projects.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Consulting"
      subtitle="Services"
      description="Expert guidance and planning for native habitat projects."
      backLabel="Back to Services"
      backHref="/services"
    />
  );
}
