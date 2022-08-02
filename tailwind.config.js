/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,jsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ], // close content
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      mdMin: "1700px",
      lgMin: "2100px",
      xsMax: { max: "400px" },
      smMax: { max: "600px" },
      mdMax: { max: "990px" },
      lgMax: { max: "1800px" },
    }, // close screens
    extend: {
      colors: {
        primary: "#32A7DD",
        secondary: "#0B3042",
        accent: "#E03427",
        danger: "#FF5252",
        success: "#198754",
        error: "#DC3545",
        info: "#0DCAF0",
        warning: "#FFC107",
        white: "#FFFFFF",
        lightPrimary: "#65BDE6",
        veryLightPrimary: "#A7D9F1",
        lightSecondary: "#165F83",
        veryLightSecondary: "#218EC4",
        lightAccent: "#E96C63",
        veryLightAccent: "#F2ABA6",
        lightDanger: "#FF8080",
        veryLightDanger: "#FFB3B3",
        lightSuccess: "#24C278",
        veryLightSuccess: "#68E3AA",
      }, // close colors
      lineHeight: {
        12: "1.2",
        13: "1.3",
        16: "1.6",
      }, // close line height
    }, // close extend
  }, // close theme
  plugins: [require("tw-elements/dist/plugin")], // close plugins
};
