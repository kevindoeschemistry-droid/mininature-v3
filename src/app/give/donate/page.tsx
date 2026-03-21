import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Donate",
  description: "Fund habitat restoration directly with a one-time or recurring gift.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Donate"
      subtitle="Give"
      description="Fund habitat restoration directly with a one-time or recurring gift."
      backLabel="Back to Give"
      backHref="/give"
    />
  );
}
