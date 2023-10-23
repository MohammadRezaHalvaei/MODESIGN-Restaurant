import los from "@/public/contact/Los Angeles.png";
import san from "@/public/contact/San Francisco.png";
import VisitItem from "./VisitItem";

const places = [
  { src: los, title: "Los Angeles, CA" },
  { src: san, title: "San Francisco, CA" },
];

export default function Visit() {
  return (
    <section className="max-w-[1378px] mx-auto pb-[200px] max-lg:pb-24 px-10 max-sm:px-6">
      <div className="mb-12 w-fit text-center mx-auto">
        <p
          className="font-josephin font-medium text-[15px] w-fit mb-5 mx-auto
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
        >
          VISIT US!
        </p>

        <h4 className="h4-title max-md:text-3xl">
          Come and visit our Branches
        </h4>
      </div>
      <div
        className="grid grid-cols-2 gap-[50px] px-10
        max-lg:px-0 max-xl:grid-cols-1 justify-items-center items-center"
      >
        {places.map((place) => (
          <VisitItem key={place.title} src={place.src} title={place.title} />
        ))}
      </div>
    </section>
  );
}
