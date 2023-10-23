export async function generateMetadata({
  params: { post },
}: {
  params: { post: string };
}) {
  async function getPosts(): Promise<Posts> {
    const req = await fetch(`http://127.0.0.1:3000/api/posts/${post}`);

    return await req.json();
  }

  const data = await getPosts();

  return {
    title: `${data?.desc} - MODESIGN`,
    description: data?.title,
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
