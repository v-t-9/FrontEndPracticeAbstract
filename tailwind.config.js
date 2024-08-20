/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './src/components/**/*.jsx', "index.html"],
  theme: {
    colors: {
      "white" : "#ffff",
      "blue" : "#4C5FD5",
      "light-blue": "#dadbf1",
      "black" : "#000000",
    },
    fontFamily: {
      "open_sans": "Open Sans",
      "roboto": "Roboto",
    },
    extend: {},
  },
  plugins: [],
}

