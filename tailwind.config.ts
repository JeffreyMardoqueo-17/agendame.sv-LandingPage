import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgdark: "#0B050E",
        bgligth: "#ffff",
        lightText: "#280133",
        hoverBG: "#FF1717",
        fecha: "#7C7C7C",
        rojoClaro: "#FF5B5B",
        azul: "#2134E9",
        redPasion: "#ff0000"
      },
    },
  },
  variants: {
    extend: {
      textColor: ["dark"],
    },
  },
  plugins: [],
};
export default config;
