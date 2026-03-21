import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Run a Fundraiser",
  description: "Start a birthday, school, or workplace fundraising drive.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Run a Fundraiser"
      subtitle="Give"
      description="Start a birthday, school, or workplace fundraising drive."
      backLabel="Back to Give"
      backHref="/give"
    />
  );
}
