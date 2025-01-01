/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.css"], // Scans all .tsx and .css files in src/
  theme: {
    extend: {
      keyframes: {
        slide: {
          "100%": { backgroundPosition: "50px 0, 125px 25px" },
        },
      },
      animation: {
        slide: "slide 4s linear infinite", // Added for consistency
      },
      fontSize: {
        xxl: "3rem", // Custom size example
        giant: "10rem", // Even larger size
      },
      colors: {
        evmGreen: "#18e582", // Adding the specific green color you mentioned
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
