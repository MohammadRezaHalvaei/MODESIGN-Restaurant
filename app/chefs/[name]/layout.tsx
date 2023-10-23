import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/utils/supabaseDb";

export const dynamic = "force-dynamic";

async function fetchChefTitle(param: string) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const { data: title, error } = await supabase
    .from("chefs")
    .select()
    .eq("name", param.replace("%20", " "));

  if (error) throw error;

  return title.at(0);
}

export async function generateMetadata({
  params: { name },
}: {
  params: { name: string };
}) {
  const data = await fetchChefTitle(name);

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
