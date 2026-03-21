import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Adopt an MNR",
  description: "Name a habitat for someone special and support its ongoing care.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Adopt an MNR"
      subtitle="Give"
      description="Name a habitat for someone special and support its ongoing care."
      backLabel="Back to Give"
      backHref="/give"
    />
  );
}
