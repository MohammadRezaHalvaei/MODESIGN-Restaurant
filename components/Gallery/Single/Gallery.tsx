import VerticalAnimation from "@/components/Animations/VerticalAnimation";
import GalleryItems from "./GalleryItems";
import italian from "@/public/gallery/single/italian.jpg";
import stuffed from "@/public/gallery/single/stuffed.jpg";
import tubular from "@/public/gallery/single/tubular.jpg";

const items = [
  { src: italian, title: "Italian Pasta" },
  { src: stuffed, title: "Stuffed Pasta" },
  { src: tubular, title: "Tubular Pasta" },
];

export default function Gallery() {
  return (
    <section className="max-w-[1378px] mx-auto py-[200px] flex flex-col gap-[100px]">
      {items.map((item, index) => (
        <VerticalAnimation delay={index * 0.2} key={item.title}>
          <GalleryItems src={item.src} title={item.title} />
        </VerticalAnimation>
      ))}
    </section>
  );
}
