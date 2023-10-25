"use client";

import Link from "next/link";
import SocialMedia from "./SocialMedia";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { useSelectedLayoutSegment } from "next/navigation";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link className="hover-gold" href="/">
        Homes
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link className="hover-gold" href="/about">
        About
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link className="hover-gold" href="/menu">
        Menu
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link className="hover-gold" href="/reservation">
        Reservation
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link className="hover-gold" href="/gallery">
        Gallery
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link className="hover-gold" href="/blog">
        Blog
      </Link>
    ),
  },
  {
    key: "7",
    label: (
      <Link className="hover-gold" href="/contact">
        Contact
      </Link>
    ),
  },
];

const links = [
  { label: "Homes", link: "/", target: null },
  { label: "About", link: "/about", target: "about" },
  { label: "Menu", link: "/menu", target: "menu" },
  { label: "Reservation", link: "/reservation", target: "reservation" },
  { label: "Gallery", link: "/gallery", target: "gallery" },
  { label: "Blog", link: "/blog", target: "blog" },
  { label: "Contact", link: "/contact", target: "contact" },
];

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
