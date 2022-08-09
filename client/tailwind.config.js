/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-100": "#001845",
        "main-200": "#001233",
        "main-300": "#9a8c98",
        "main-400": "#c9ada7",
        "main-500": "#f2e9e4",
      },
    },
  },
  plugins: [],
};
