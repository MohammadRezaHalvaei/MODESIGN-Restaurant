import About from "@/components/Home/About/About";
import Menu from "@/components/Home/Menu/Menu";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import Offer from "../components/Home/Offer/Offer";
import Services from "@/components/Home/Services/Services";
import Blog from "@/components/Home/Blog/Blog";
import Reservation from "@/components/Footer/Reservation";
import HeaderChildren from "@/components/Header/HeaderChildren";

export default function Home() {
  return (
    <main>
      <HeaderChildren />
      <About />
      <Menu />
      <Testimonial />
      <div className="h-[600px] bg-[50%_50%] bg-[url('/home/Testimonial.jpg')] bg-fixed" />
      <Offer />
      <Services />
      <Blog />
      <Reservation />
    </main>
  );
}
