import PlaceholderPage from "@/components/ui/PlaceholderPage";

export const metadata = {
  title: "Blog",
  description: "Articles, reflections, and stories from the field.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Blog"
      subtitle="Explore"
      description="Articles, reflections, and stories from the field."
      backLabel="Back to Explore"
      backHref="/explore"
    />
  );
}
