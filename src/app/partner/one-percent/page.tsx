import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "1% for the Planet",
  description: "Join the 1% for the Planet commitment and support native habitats.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="1% for the Planet"
      subtitle="Partner"
      description="Join the 1% for the Planet commitment and support native habitats."
      backLabel="Back to Partner"
      backHref="/partner"
    />
  );
}
