import ChefsItem from "./ChefsItem";

export default async function ChefsDetails({ name }: { name: string }) {
  async function getData(): Promise<FetchDataType> {
    const req = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/api/chefs/${name}`
    );

    return await req.json();
  }

  const data = await getData();

  return (
    <section
      className="pt-[200px] mx-auto gap-[60px] pb-[100px] 
      max-w-[1378px] grid grid-cols-[0.65fr_1fr] items-center"
    >
      <ChefsItem data={data} />
    </section>
  );
}
