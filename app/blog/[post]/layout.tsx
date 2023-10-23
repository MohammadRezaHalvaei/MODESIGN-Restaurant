import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/utils/supabaseDb";

export const dynamic = "force-dynamic";

async function fetchTitlePost(param: string) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const { data: title, error } = await supabase
    .from("blog")
    .select()
    .eq("id", param);

  if (error) throw error;

  return title.at(0);
}

export async function generateMetadata({
  params: { post },
}: {
  params: { post: string };
}) {
  const data = await fetchTitlePost(post);

  return {
    title: `${data?.desc} - MODESIGN`,
    description: data?.desc,
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
