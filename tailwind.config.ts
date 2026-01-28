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
        dPink: {
          50: "#ECE3F3",
          500: "#C23489",
          600: "#DC677F",
        },
        dBlue: {
          50: "#EAFAFE",
          300: "#E5F2FF",
          400: "#D1E6FC",
          500: "#ACD4FB",
        },

        dGray: {
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
        // rotate: {
        //   "0% ": { top: "0%", left: "43%" },
        //   "20% ": { top: "20%", left: "10%" },
        //   "40% ": { top: "65%", left: "5%" },
        //   "60% ": { top: "95%", left: "41%" },
        //   "80% ": { top: "65%", left: "75%" },
        //   "100%": { top: "20%", left: "78%" },
        // },
        rotate: {
          "0% ": { transform: "rotate(0deg)" },
          "100% ": { transform: "rotate(360deg)" },
        },
        rollback: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        width: "width 0.3s linear",
        width100: "width100 0.5s linear",
        headerAnim: "headerAnim 2s linear",
        translateX: "translateX 3s infinite",
        "spin-slow": "spin 50s linear infinite",
        "spin-moon": "rollback 50s linear infinite",
        // rotate: "rotate 7s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
