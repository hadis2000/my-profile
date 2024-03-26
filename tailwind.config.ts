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
          50: "#ECE3F3",
          500: "#C23489",
          600: "#DC677F",
        },
        defaultBlue: {
          50: "#EAFAFE",
          300: "#E5F2FF",
          400: "#D1E6FC",
          500: "#ACD4FB",
        },

        defaultGray: {
          500: "#00011cb1",
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
        headerAnim: {
          "0%": {
            width: "40%",
            opacity: "0",
          },
          "100%": {
            width: "90%",
            opacity: "1",
          },
        },
        translateX: {
          "0% 100%": { left: "45%" },
          "50%": { left: "50%" },
        },
      },
      animation: {
        width: "width 0.3s linear",
        width100: "width100 0.5s linear",
        headerAnim: "headerAnim 2s linear",
        translateX: "translateX 3s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
