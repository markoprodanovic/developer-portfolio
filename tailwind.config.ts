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
        customBackground: "#F2F3EC",
        customBackgroundSecondary: "#FCFDF8",
        customText: "#101010",
        matteBlack: "#101010",
        accentPrimary: "#A0CEC8",
        accentSecondary: "#F7D89A",
        btnHighlight: "#3B9286",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
