import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order App Restaurant - MODESIGN",
  description: "Order App Restaurant",
};

export default function OrderAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
