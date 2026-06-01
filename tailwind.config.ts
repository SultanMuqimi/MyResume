/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const { heroui } = require("@heroui/react");

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#C8962A",
              foreground: "#000000",
            },
            focus: "#C8962A",
          },
        },
      },
    }),
  ],
};

export default config;
