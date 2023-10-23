import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservation    Restaurant - MODESIGN",
  description: "Reservation  Restaurant",
};

export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
