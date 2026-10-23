/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { gold: "#F5B800", ink: "#0a0a0a", steel: "#161616" },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 25s linear infinite" },
    },
  },
  plugins: [],
};
