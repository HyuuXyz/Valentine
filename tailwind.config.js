/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        sparkle: "sparkle 1.5s infinite ease-in-out",
      },
      keyframes: {
        sparkle: {
          "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
