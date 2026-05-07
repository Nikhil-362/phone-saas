/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {

        primary: "#157A6E",
        secondary: "#499F68",
        accent: "#77B28C",
        surface: "#FFFFFF",
        background: "#F5F5F3",
        danger: "#B4654A",

      },

    },
  },

  plugins: [],
}