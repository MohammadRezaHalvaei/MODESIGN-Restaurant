import ContactItem from "./ContactItem";

import location from "@/public/contact/Location.svg";
import mail from "@/public/contact/Mail.svg";
import phone from "@/public/contact/Call.svg";
import ContactSocial from "./ContactSocial";

import insta from "@/public/contact/Insta.svg";
import facebook from "@/public/contact/Fb.svg";
import twitter from "@/public/contact/Twiter.svg";
import pintrest from "@/public/contact/Pintrest.svg";

const contacts = [
  {
    src: location,
    alt: "Location",
    text: "Riverside 25, San Francisco, California",
  },
  { src: mail, alt: "Email", text: "evanmattew@mail.com" },
  { src: phone, alt: "Phone", text: "800-234-567" },
];

const socials = [
  { src: insta, alt: "Instagram", link: "https://Instagram.com" },
  { src: facebook, alt: "Facebook", link: "https://facebook.com" },
  { src: twitter, alt: "Twitter", link: "https://Twitter.com" },
  { src: pintrest, alt: "Pintrest", link: "https://Pintrest.com" },
];

export default function ContactForm() {
  return (
    <section
      className="max-w-[1378px] py-[200px] mx-auto grid grid-cols-[0.75fr_1fr] items-center 
      max-lg:py-24 px-10 max-xl:grid-cols-1 max-xl:gap-20"
    >
      <article className="flex flex-col gap-[30px]">
        <div>
          <h4 className="h4-title mb-[22px] max-lg:text-3xl max-lg:mb-4">
            Contact Information
          </h4>
          <p className="parag text-[#555555] max-lg:text-base">
            Bring the table winwin survival strateges ensure proactive
            domination the end of the day going real times multiple touchpoints.
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.alt}
              src={contact.src}
              text={contact.text}
              alt={contact.alt}
            />
          ))}
          <div className="flex gap-3">
            {socials.map((social) => (
              <ContactSocial
                key={social.alt}
                alt={social.alt}
                src={social.src}
                link={social.link}
              />
            ))}
          </div>
        </div>
      </article>
      <article>
        <div className="mb-10">
          <p
            className="font-josephin font-medium text-[15px] w-fit mb-5
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
          >
            MAIL US
          </p>

          <h4 className="h4-title max-lg:text-3xl">Have a Question?</h4>
        </div>
        <form className="max-lg:text-center">
          <div className="grid grid-cols-2 gap-x-7 gap-y-[34px] max-md:grid-cols-1">
            <input
              className="input-style border-[#C4C4C4] placeholder:text-[#555555]"
              placeholder="Name"
            />
            <input
              className="input-style border-[#C4C4C4] placeholder:text-[#555555]"
              placeholder="Email"
              type="email"
            />
            <input
              className="input-style border-[#C4C4C4] placeholder:text-[#555555]"
              placeholder="Subject"
            />
            <input
              className="input-style border-[#C4C4C4] placeholder:text-[#555555]"
              placeholder="Phone"
            />
          </div>
          <textarea
            className="input-style border-[#C4C4C4] placeholder:text-[#555555] w-full my-[34px] resize-none"
            rows={6}
            placeholder="Message"
          />
          <button
            className="btn-white text-[#E1B168] py-5 px-[68px] text-[22px] leading-[27.83px] 
            max-md:text-lg max-md:px-8 max-md:py-2.5"
          >
            Send
          </button>
        </form>
      </article>
    </section>
  );
}
