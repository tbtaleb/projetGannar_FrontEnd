/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "MainDark": "#00203a",
        "MainLight": "#dfe6ff",
        "MainShade": "#6884a1"
      }
    },
  },
  plugins: [],
}

