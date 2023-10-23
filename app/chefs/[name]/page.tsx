import ChefsDetails from "@/components/Chefs/Single/ChefsDetails";
import Video from "@/components/Chefs/Single/Video";
import Reservation from "@/components/Footer/Reservation";

export async function generateStaticParams() {
  return [
    { name: "Avroko" },
    { name: "Evan Mattew" },
    { name: "Diane Clarkson" },
    { name: "Dan Rafalin" },
    { name: "Abramo Baldovino" },
    { name: "Takeo Andrea" },
  ];
}

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
