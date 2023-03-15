/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "30px",
    },

    extend: {
      colors: {
        primary: "#06b6d4",
      },
    },
  },
  plugins: [],
};
