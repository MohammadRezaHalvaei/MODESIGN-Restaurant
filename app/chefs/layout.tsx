import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chefs Restaurant - MODESIGN",
  description: "Chefs Restaurant",
};

export default function ChefsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
