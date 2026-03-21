import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Fund a New MNR",
  description: "Help plant a new garden. Each with their own fundraising meter.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Fund a New MNR"
      subtitle="Give"
      description="Help plant a new garden. Each with their own fundraising meter."
      backLabel="Back to Give"
      backHref="/give"
    />
  );
}
