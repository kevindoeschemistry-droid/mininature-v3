import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "For Municipalities",
  description: "City and public land services for native habitat restoration.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="For Municipalities"
      subtitle="Services"
      description="City and public land services for native habitat restoration."
      backLabel="Back to Services"
      backHref="/services"
    />
  );
}
