/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "100vh": "100vh",
      },
      fontFamily: {
        cursive: ["Apple Chancery", "cursive", "serif"],
      },
    },
  },
  plugins: [],
};
