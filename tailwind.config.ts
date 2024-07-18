import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans-thai': ['Noto Sans Thai', 'sans-serif'],
      },
      colors: {
        pink: {
          550: "#E01E7B",
        },
        sky: {
          750: "#004586",
        },
        stone: {
          950: "#1E1E1E",
        },
        orange: {
          250: "#D5AA7F",
          550: "#EF5600",
        },
        zinc: {
          830: "#2D2928",
        },
        yellow: {
          850: "#4B2804",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
