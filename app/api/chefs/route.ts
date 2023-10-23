import data from "../chefs.json";

export async function GET() {
  return Response.json(data);
}
