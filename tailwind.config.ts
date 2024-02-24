import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultPink: {
          500: "#C23489",
        },
        defaultBlue: {
          500: "",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        width: {
          "0%": { width: "0%" },
          "100%": { width: "50%" },
        },
        width100: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        width: "width 0.3s linear",
        width100: "width100 0.7s linear",
      },
    },
  },
  plugins: [],
};
export default config;