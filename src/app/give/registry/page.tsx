import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Registry",
  description: "Browse our wishlist of in-kind donations that people can offer.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Registry"
      subtitle="Give"
      description="Browse our wishlist of in-kind donations that people can offer."
      backLabel="Back to Give"
      backHref="/give"
    />
  );
}
