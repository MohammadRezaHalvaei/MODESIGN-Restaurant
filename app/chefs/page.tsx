import Testimonial from "@/components/About/Testimonial/Testimonial";
import ChefsSkill from "@/components/Chefs/ChefsSkill";
import Team from "@/components/Chefs/Team";
import Reservation from "@/components/Footer/Reservation";

export default function ChefsPage() {
  return (
    <>
      <Team />
      <Testimonial />
      <ChefsSkill />
      <Reservation />
    </>
  );
}
