import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Book an Educational Activity",
  description: "Schedule a learning experience for your group or organization.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Book an Educational Activity"
      subtitle="Services"
      description="Schedule a learning experience for your group or organization."
      backLabel="Back to Services"
      backHref="/services"
    />
  );
}
