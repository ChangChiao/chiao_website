/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Monda", '"Noto Sans TC"', "sans-serif"],
        // monda: ["Monda"]
      },
      boxShadow: {
        light: "0 2px 5px rgba(0,0,0,0.26)",
      },
      keyframes: {
        "checked-anim": {
          "50%": { width: "3000px", height: "3000px" },
          "100%": { width: "100vw", height: "100vh", "border-radius": 0 },
        },
        "not-checked-anim": {
          "0%": {
            width: "3000px",
            height: "3000px",
          },
        },
      },
      animation: {
        "not-checked-anim": "not-checked-anim .2s both",
        "checked-anim": "checked-anim 1s ease both",
      },
    },
  },
  plugins: [],
};
