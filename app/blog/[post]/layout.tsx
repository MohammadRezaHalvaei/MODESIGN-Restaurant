export async function generateMetadata({
  params: { post },
}: {
  params: { post: string };
}) {
  async function getPosts(): Promise<Posts> {
    const req = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/api/posts/${post}`
    );

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
