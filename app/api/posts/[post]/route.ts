import posts from "../../post.json";

export async function GET(
  request: Request,
  { params: { post } }: { params: { post: string } }
) {
  const filteredData = posts.filter((chef) =>
    chef.id.toLowerCase().includes(post.toLowerCase())
  );

  return Response.json(filteredData[0]);
}
