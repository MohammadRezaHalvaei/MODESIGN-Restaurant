import BlogItem from "@/components/Blog/Single/BlogItem";

// async function getPosts(): Promise<Posts[]> {
//   const req = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/posts`);

//   return await req.json();
// }

// export async function generateStaticParams() {
//   const posts = await getPosts();

//   return posts?.map((post) => ({
//     post: post.id,
//   }));
// }

export default async function BlogPostPage({
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

  return (
    <main className="max-w-[1378px] mx-auto pt-[200px] pb-[100px] max-lg:py-[100px] px-10 max-md:px-4">
      <BlogItem data={data} />
    </main>
  );
}
