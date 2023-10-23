import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Restaurant - MODESIGN",
  description: "Blog Restaurant",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
