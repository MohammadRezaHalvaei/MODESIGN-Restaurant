import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Restaurant - MODESIGN",
  description: "Order Restaurant",
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
