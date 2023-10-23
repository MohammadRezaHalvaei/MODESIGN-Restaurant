import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Restaurant - MODESIGN",
  description: "Contact Restaurant",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
