/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#19517b",
        secondary: "#6d6a7c",
      },
      boxShadow: {
        main: "0 0 25px rgba(0, 0, 0, 0.1)",
        secondary: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      borderRadius: {
        main: "43px 0px 45px 45px",
      },
    },
  },
  plugins: [],
};
