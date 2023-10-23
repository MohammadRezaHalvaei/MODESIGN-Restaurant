import BlogCard from "./BlogCard";

const items = [
  {
    src: "/home/blog/Mediterranean.jpg",
    title: "The Most Popular Delicious Food Of Mediterranean Cuisine",
    text: "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    link: "4",
  },
  {
    src: "/home/blog/Dessert.jpg",
    title: "Elegant Dessert: 10 Tips How to Make It at Home",
    text: "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    link: "3",
  },
];

export default function Blog() {
  return (
    <section
      className="py-[200px] flex flex-col gap-16 items-center max-w-[1378px] mx-auto px-20 
      max-lg:px-16 max-md:px-9 max-sm:px-6 max-lg:py-[100px]"
    >
      <div className="flex flex-col gap-[22px] max-w-[702px] text-center">
        <div className="flex flex-col gap-3 items-center text-[#292E36]">
          <p
            className="font-josephin font-medium text-[15px] w-fit 
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
          >
            BLOG
          </p>

          <h4 className="h4-title">Be First Who Read News</h4>
        </div>
        <p className="parag">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content making.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-14 items-stretch justify-items-stretch max-lg:gap-8 max-md:grid-cols-1">
        {items.map((item, index) => (
          <BlogCard
            src={item.src}
            key={index}
            title={item.title}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}
