import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery Restaurant - MODESIGN",
  description: "Gallery Restaurant",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
