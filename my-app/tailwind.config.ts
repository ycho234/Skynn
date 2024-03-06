import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customLightGreen: "#f3f6f1",
        customDarkGreen: "#859B7C",
      },
      dropShadow: {
        custom: ["4px 5px 4px rgba(166, 169, 164)"],
        customHover: ["4px 5px 4px rgba(133, 138, 130)"],
      },
    },
  },
  plugins: [],
};

export default config;
