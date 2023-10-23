import PopularDishes from "./PopularDishes";
import SpecialOffer from "./SpecialOffer";

export default function Offer() {
  return (
    <section className="py-[185px] max-lg:py-[100px] flex flex-col gap-[90px]">
      <SpecialOffer />
      <PopularDishes />
    </section>
  );
}
