import BlogPosts from "@/components/Blog/BlogPosts";
import InstaGallery from "@/components/Gallery/Single/InstaGallery";
import TableBook from "@/components/Gallery/Single/TableBook";

export default function BlogPage() {
  return (
    <>
      <BlogPosts />
      <TableBook />
      <InstaGallery />
    </>
  );
}
