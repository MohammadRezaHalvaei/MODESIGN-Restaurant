"use client";

import { Link } from "nextjs13-progress";
import SocialMedia from "./SocialMedia";
import { MenuOutlined } from "@ant-design/icons";
import { useSelectedLayoutSegment } from "next/navigation";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";

const links = [
  { label: "Homes", link: "/", target: null },
  { label: "About", link: "/about", target: "about" },
  { label: "Menu", link: "/menu", target: "menu" },
  { label: "Reservation", link: "/reservation", target: "reservation" },
  { label: "Gallery", link: "/gallery", target: "gallery" },
  { label: "Blog", link: "/blog", target: "blog" },
  { label: "Contact", link: "/contact", target: "contact" },
];

const items: MenuProps["items"] = links!.map((link, index) => ({
  key: (index + 1).toString(),
  label: (
    <Link className="hover-gold" href={link?.link}>
      {link?.label}
    </Link>
  ),
}));

export default function HeaderMenu() {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <menu
      className={`flex justify-around w-full border-t z-20 max-lg:justify-between max-lg:px-16
      border-b border-[#5C6168] py-7 items-center`}
      // ${scrollPosition > 318 ? "fixed top-0 bg-[#292E36] py-[14px]" : "static"}
    >
      <nav className="flex parag text-[#DEDEDE] gap-7 max-lg:hidden">
        {links.map((link) => (
          <Link
            key={link.label}
            className={`hover-gold ${
              activeSegment === link.target ? "text-[#E1B168]" : ""
            }`}
            href={link.link}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Dropdown menu={{ items }} placement="bottom" className="lg:hidden">
        <MenuOutlined style={{ color: "#fff", fontSize: "26px" }} />
      </Dropdown>

      <SocialMedia />
    </menu>
  );
}
