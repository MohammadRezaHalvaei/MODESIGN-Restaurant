import Image from "next/image";
import Starter from "@/components/Menu/Starter";
import MainDish from "@/components/Menu/MainDish";
import Dessert from "@/components/Menu/Dessert";
import Reservation from "@/components/Footer/Reservation";

import chicken from "@/public/menu/chicken.jpg";
import watermelon from "@/public/menu/watermelon.jpg";
import OpacityAnimation from "@/components/Animations/OpacityAnimation";

export default function MenuPage() {
  return (
    <>
      <Starter />
      <OpacityAnimation delay={0.2}>
        <Image src={chicken} alt="Chicken" className="min-h-[200px]" />
      </OpacityAnimation>
      <MainDish />
      <OpacityAnimation delay={0.2}>
        <Image src={watermelon} alt="Water Melon" className="min-h-[200px]" />
      </OpacityAnimation>
      <Dessert />
      <Reservation />
    </>
  );
}
