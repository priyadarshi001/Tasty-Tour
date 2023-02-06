/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, html}"], // telling to which files i'm using tailwind
  theme: {
    screen:{
      sm: '480px',
      md: '768px', 
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        resHeading: "#282C3F",
        resSubtitles: "#686b78",
        extras: "#535665",
        starG: "#48c478",
        starL: "#d67c38",
      },
    },
  },
  plugins: [],
};
