/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.625rem",
      "5xl": "3.25rem",
      "6xl": "5.5rem",
    },
    extend: {
      colors: {
        blue: {
          google: "#4285f4",
          googleDark: "#3c79e6",
        },
      },
    },
  },
  plugins: [],
};
