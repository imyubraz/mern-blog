/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1565d8",
        dark:{
          hard: "#0d2436",
          soft: "#183b56",
        },
      },
      fontFamily:{
        opensans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}