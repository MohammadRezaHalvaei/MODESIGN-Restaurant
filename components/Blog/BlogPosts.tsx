import BlogCard from "../Home/Blog/BlogCard";

async function getPosts(): Promise<Posts[]> {
  const req = await fetch("http://127.0.0.1:3000/api/posts");

  return await req.json();
}

export default async function BlogPosts() {
  const posts = await getPosts();

  return (
    <section className="max-w-[1378px] py-[200px] mx-auto max-lg:py-[80px]">
      <article className="text-center max-w-[702px] mb-16 mx-auto px-9 max-md:mb-8">
        <p
          className="font-josephin font-medium text-[15px] w-fit mx-auto mb-3
          leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
        >
          BLOG
        </p>

        <h4 className="h4-title mb-[22px] max-md:text-3xl max-md:mb-3">
          Be First Who Read News
        </h4>

        <p className="parag text-[#555555] max-md:text-base">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content making.
        </p>
      </article>
      <article className="grid grid-cols-2 gap-12 px-10 max-md:grid-cols-1 max-md:gap-16 max-md:px-6">
        {posts?.map((post, index) => (
          <BlogCard
            key={index}
            src={post.src}
            title={post.title}
            text={post.subTitle}
            link={post.id}
          />
        ))}
      </article>
    </section>
  );
}
