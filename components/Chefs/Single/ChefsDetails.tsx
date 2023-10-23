import ChefsItem from "./ChefsItem";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/utils/supabaseDb";

async function fetchChefsDetails(param: string) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const { data: details, error } = await supabase
    .from("chefs")
    .select()
    .eq("name", param.replace("%20", " "));

  if (error) throw error;

  return details?.at(0);
}

export default async function ChefsDetails({ name }: { name: string }) {
  const data = await fetchChefsDetails(name);

  return (
    <section
      className="pt-[200px] mx-auto gap-[60px] pb-[100px] 
      max-w-[1378px] grid grid-cols-[0.65fr_1fr] items-center"
    >
      <ChefsItem data={data} />
    </section>
  );
}
