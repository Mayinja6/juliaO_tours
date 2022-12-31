/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_clr: "#ff2f2f",
        secondary_clr: "#0064e0",
        tartiary_clr: "#737373",
        day_overlay_clr: "#151515",
        night_overlay_clr: "#101f46",
      },
    },
  },
  plugins: [],
};
