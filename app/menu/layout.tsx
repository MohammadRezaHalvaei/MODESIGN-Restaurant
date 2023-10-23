import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu Restaurant - MODESIGN",
  description: "Menu Restaurant",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
