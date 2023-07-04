/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "hsl(193, 38%, 86%)",
        primaryNeon: "hsl(150, 100%, 66%)",
        grayBlue: "hsl(217, 19%, 38%)",
        darkGrayBlue: "hsl(217, 19%, 24%)",
        darkBlue: "hsl(218, 23%, 16%)",
      },
    },
  },
  plugins: [],
};
