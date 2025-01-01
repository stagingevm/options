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
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
