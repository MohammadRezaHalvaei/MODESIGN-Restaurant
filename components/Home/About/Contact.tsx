import ContactItem from "./ContactItem";
import VerticalAnimation from "@/components/Animations/VerticalAnimation";

import location from "@/public/home/icons/Location.svg";
import openHours from "@/public/home/icons/Hours.svg";
import reserve from "@/public/home/icons/Reserve.svg";

const contactDetails = [
  {
    src: location,
    alt: "Location",
    title: "Locate Us",
    text: "Riverside 25, San Francisco, California",
  },
  {
    src: openHours,
    alt: "Hours",
    title: "Open Hours",
    text: "Mon To Fri 9:00 AM - 9:00 PM",
  },
  {
    src: reserve,
    alt: "Reserve",
    title: "Reservation",
    text: "hirestaurantate@gmail.com",
  },
];

export default function Contact() {
  return (
    <VerticalAnimation
      delay={0}
      className="grid grid-cols-3 gap-16  mb-36 max-xl:grid-cols-2 px-5 max-lg:grid-cols-1"
    >
      {contactDetails.map((contact) => (
        <ContactItem
          key={contact.alt}
          src={contact.src}
          alt={contact.alt}
          title={contact.title}
          text={contact.text}
        />
      ))}
    </VerticalAnimation>
  );
}
