import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Restaurant - MODESIGN",
  description: "About Restaurant",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
