export async function generateMetadata({
  params: { name },
}: {
  params: { name: string };
}) {
  return {
    title: `${name.replace("%20", " ")} - MODESIGN`,
    description: name.replace("%20", " "),
  };
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
