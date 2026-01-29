/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        celista: {
          primary: "#ff1a1a",      // red
          secondary: "#1f1f1f",    // dark grey
          accent: "#ff3b3b",       // glow red
          neutral: "#ffffff",      // white text
          "base-100": "#000000",   // pure black
          "base-200": "#050505",
          "base-300": "#111111",
        },
      },
    ],
    themeRoot: ":root",
    defaultTheme: "celista",
  },
};
