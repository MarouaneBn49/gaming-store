import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0a0a0f",
          100: "#14141c",
          200: "#1e1e2a",
          300: "#2a2a3a",
        },
        primary: {
          DEFAULT: "#E63946",
          light: "#FF6B6B",
          dark: "#C62828",
        },
        accent: {
          DEFAULT: "#1A2744",
          light: "#2A3F6E",
        },
      },
      fontFamily: {
        title: ['"Orbitron"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      animation: {
        pulse_slow: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #E63946, 0 0 10px #E63946" },
          "100%": { boxShadow: "0 0 20px #E63946, 0 0 40px #FF6B6B" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
