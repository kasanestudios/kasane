import type { Config } from "tailwindcss";
import { createPlugin } from "windy-radix-palette";

const {} = require("tailwindcss/lib/util/flattenColorPalette");

const colors = createPlugin({
  opacitySupport: true,
});
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        xl: "85rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [colors.plugin, require("@tailwindcss/typography")],
  presets: [require("windy-radix-typography")],
};
export default config;
