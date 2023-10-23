import data from "../post.json";

export async function GET() {
  return Response.json(data);
}
