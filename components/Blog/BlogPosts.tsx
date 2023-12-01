import BlogCard from "../Home/Blog/BlogCard";

const posts = [
  {
    id: 1,
    title: "The Legend of US Cuisine: The Story of Hungry People",
    subTitle:
      "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.\n",
    src: "/blog/single/bread.jpg",
    desc: "The Legend of US Cuisine",
  },
  {
    id: 2,
    title: "The Most Popular Delicious Food of Mediterranean Cuisine",
    subTitle:
      "Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    src: "/blog/single/chicken.jpg",
    desc: "Mediterranean Cuisine",
  },
  {
    id: 3,
    title: "The Best Seafood in San Francisco, According to Top Chefs",
    subTitle:
      "Collaborative on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    src: "/blog/single/hamburger.jpg",
    desc: "Best Seafood in cisco",
  },
  {
    id: 4,
    title: "The Top 10 most famous Indian dishes in the world are here",
    subTitle:
      "Podcasting on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    src: "/blog/single/fruit.jpg",
    desc: "Top 10 most famous Indian dishes",
  },
];

export default async function BlogPosts() {
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
