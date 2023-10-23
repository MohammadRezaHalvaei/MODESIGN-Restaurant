import chefs from "../../chefs.json";

export async function GET(
  request: Request,
  { params: { name } }: { params: { name: string } }
) {
  const filteredData = chefs.filter((chef) =>
    chef.name.toLowerCase().includes(name.toLowerCase())
  );

  return Response.json(filteredData[0]);
}
