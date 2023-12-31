import "./globals.css";
import type { Metadata } from "next";
import { cormorant, josefin, cervanttis } from "./fonts";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Next13NProgress } from "nextjs13-progress";

// export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Restaurant - MODESIGN",
  description: "Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${josefin.variable} ${cormorant.variable} ${cervanttis.variable} overflow-x-hidden`}
    >
      <body>
        <Header />
        {children}
        <Footer />
        <Next13NProgress color="#E1B168" height={3} />
      </body>
    </html>
  );
}
