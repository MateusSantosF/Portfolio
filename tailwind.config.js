/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'text-default': '#2b2c33',
        primary: "#107ed9",
        secondary: "#d4d4d8",
        dark: "#2b2c33",
        black: "#0C0A08",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
