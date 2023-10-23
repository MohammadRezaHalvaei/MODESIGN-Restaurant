export async function generateMetadata({
  params: { name },
}: {
  params: { name: string };
}) {
  async function getData(): Promise<FetchDataType> {
    const req = await fetch(`http://127.0.0.1:3000/api/chefs/${name}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    return await req.json();
  }
  const data = await getData();

  return {
    title: `Chef ${data?.name} - MODESIGN`,
    description: data?.name,
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
