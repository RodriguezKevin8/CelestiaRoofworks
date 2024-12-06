/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "deep-green": "#212e1d",
      },
      animation: {
        "infinite-scroll": "scroll 30s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        crimson: ['"Crimson Text"', "serif"],
        hind: ['"Hind Mysuru"', "sans-serif"],
        lora: ["Lora", "serif"],
        ptSerif: ['"PT Serif"', "serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-animated"),
  ],
};
