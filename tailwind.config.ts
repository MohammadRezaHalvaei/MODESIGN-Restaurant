import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josephin: ["var(--font-josefin)"],
        cormorant: ["var(--font-cormorant)"],
        cervantis: ["var(--font-cervantis)"],
      },
    },
  },
  plugins: [],
};
export default config;
