import Gallery from "@/components/Gallery/Single/Gallery";
import InstaGallery from "@/components/Gallery/Single/InstaGallery";
import TableBook from "@/components/Gallery/Single/TableBook";

export async function generateStaticParams() {
  return [
    { name: "Italian Pasta" },
    { name: "Vegan Pizza" },
    { name: "Mixed Veg" },
    { name: "Frozen Yogurt" },
    { name: "Stuffed Meat" },
    { name: "Fruit Salad" },
  ];
}

export default function GallerySingle() {
  return (
    <main>
      <Gallery />
      <TableBook />
      <InstaGallery />
    </main>
  );
}
