import ChefsDetails from "@/components/Chefs/Single/ChefsDetails";
import Video from "@/components/Chefs/Single/Video";
import Reservation from "@/components/Footer/Reservation";

// async function getPosts(): Promise<FetchDataType[]> {
//   const req = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/chefs`);

//   return await req.json();
// }

// export async function generateStaticParams() {
//   const chefs = await getPosts();

//   return chefs?.map((chef) => ({
//     name: chef.name,
//   }));
// }

export default function ChefsName({
  params: { name },
}: {
  params: { name: string };
}) {
  return (
    <main>
      <ChefsDetails name={name} />
      <Video />
      <Reservation />
    </main>
  );
}
