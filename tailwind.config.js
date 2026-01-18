/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#7B2CBF",
        primaryBlue: "#4EA8DE",
        darkBg: "#0B021C",
        darkBg2: "#12052A",
        textMuted: "#CFC8E3",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
