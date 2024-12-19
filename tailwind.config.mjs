/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-pink": "#FF6FB5",
        "brand-light": "#FFF4F8",
        "brand-dark": "#7A3E54",
      },
    },
  },
  plugins: [],
};
