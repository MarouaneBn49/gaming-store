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
        neon: {
          purple: "#8B5CF6",
          cyan: "#00E5FF",
          pink: "#FF0080",
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
          "0%": { boxShadow: "0 0 5px #8B5CF6, 0 0 10px #8B5CF6" },
          "100%": { boxShadow: "0 0 20px #8B5CF6, 0 0 40px #00E5FF" },
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
