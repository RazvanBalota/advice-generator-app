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
      boxShadow: {
        xl22: "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [],
};
