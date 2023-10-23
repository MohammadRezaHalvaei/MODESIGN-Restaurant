import About from "@/components/About/About";
import Counts from "@/components/About/Counts/Counts";
import Gallery from "@/components/About/Gallery";
import Team from "@/components/About/Team/Team";
import Testimonial from "@/components/About/Testimonial/Testimonial";
import Reservation from "@/components/Footer/Reservation";

export default function AboutPage() {
  return (
    <>
      <About />
      <Counts />
      <Team />
      <Testimonial />
      <Gallery />
      <Reservation />
    </>
  );
}
