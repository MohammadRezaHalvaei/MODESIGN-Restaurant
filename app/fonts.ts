import localFont from "next/font/local";

export const josefin = localFont({
  src: [
    {
      path: "../public/fonts/JosefinSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/JosefinSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-josefin",
});

export const cormorant = localFont({
  src: [
    {
      path: "../public/fonts/CormorantInfant-Bold.ttf",
      weight: "700",
      style: "Bold",
    },
    {
      path: "../public/fonts/CormorantInfant-Italic.ttf",
      weight: "400",
      style: "Italic",
    },
  ],
  display: "swap",
  variable: "--font-cormorant",
});

export const cervanttis = localFont({
  src: "../public/fonts/Cervanttis.ttf",
  display: "swap",
  variable: "--font-cervantis",
});

// export const cormorant = Cormorant_Infant({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["700"],
//   variable: "--font-cormorant",
// });

// export const josefin = Josefin_Sans({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["400", "500"],
//   variable: "--font-josefin",
// });
