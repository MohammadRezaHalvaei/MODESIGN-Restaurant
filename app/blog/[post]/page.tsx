import BlogItem from "@/components/Blog/Single/BlogItem";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/utils/supabaseDb";

async function fetchPosts(params: string) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const { data: blog } = await supabase.from("blog").select().eq("id", params);

  return blog?.at(0);
}

export async function generateStaticParams() {
  return [{ post: "1" }, { post: "2" }, { post: "3" }, { post: "4" }];
}

export default async function BlogPostPage({
  params: { post },
}: {
  params: { post: string };
}) {
  const data = await fetchPosts(post);

  return (
    <main className="max-w-[1378px] mx-auto pt-[200px] pb-[100px] max-lg:py-[100px] px-10 max-md:px-4">
      <BlogItem data={data} />
    </main>
  );
}
