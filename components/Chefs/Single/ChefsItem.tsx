import Image from "next/image";
import ContactItem from "./ContactItem";
import OpacityAnimation from "@/components/Animations/OpacityAnimation";
import HorizontalAnimation from "@/components/Animations/HorizontalAnimation";
import VerticalAnimation from "@/components/Animations/VerticalAnimation";

import call from "@/public/chefs/single/Call.svg";
import exp from "@/public/chefs/single/exp.svg";
import location from "@/public/chefs/single/Location.svg";
import mail from "@/public/chefs/single/mail.svg";

import fb from "@/public/chefs/single/Fb.svg";
import insta from "@/public/chefs/single/Insta.svg";
import pintrest from "@/public/chefs/single/Pintrest.svg";
import twitter from "@/public/chefs/single/Twiter.svg";

const socials = [
  { src: insta, alt: "Instagram" },
  { src: fb, alt: "Facebook" },
  { src: twitter, alt: "Twitter" },
  { src: pintrest, alt: "Pintrest" },
];

export default function ChefsItem({ data }: { data: FetchDataType }) {
  const details = [
    {
      src: exp,
      title: "Experience",
      text: `${data?.exp} Years of Expereince`,
    },
    { src: mail, title: "Mail", text: data?.email },
    { src: call, title: "Contact Us", text: "800-234-567" },
    {
      src: location,
      title: "Locate Us",
      text: data?.address,
    },
  ];

  return (
    <>
      <OpacityAnimation delay={0.2}>
        <Image src={data!.img} alt="Chef Image" width={542} height={670} />
      </OpacityAnimation>

      <article>
        <HorizontalAnimation delay={0.3}>
          <h4 className="h4-title text-[#292E36] mb-4">{data?.name}</h4>
          <h6 className="font-josephin text-[#E1B168] text-[25px] leading-[31.62px] font-normal mb-4">
            {data?.role}
          </h6>
          <p className="parag text-[#555555] mb-[52px]">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divid with additional
            clickthroughs from Nanotechnology immersion along the information
            highway will close the loop on focusing solely the bottom line.
          </p>
        </HorizontalAnimation>

        <div className="grid grid-cols-2 gap-x-[108px] gap-y-12 mb-14">
          {details.map((detail, index) => (
            <HorizontalAnimation delay={index * 0.15} key={detail.title}>
              <ContactItem
                src={detail.src}
                text={detail.text}
                title={detail.title}
              />
            </HorizontalAnimation>
          ))}
        </div>
        <div className="flex gap-4">
          {socials.map((social, index) => (
            <VerticalAnimation delay={index * 0.15} key={social.alt}>
              <Image src={social.src} alt={social.alt} />
            </VerticalAnimation>
          ))}
        </div>
      </article>
    </>
  );
}
