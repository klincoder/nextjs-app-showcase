/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,jsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B65C6",
        secondary: "#EEF1F6",
        tertiary: "#0e1133",
        lightBlue: "#E1F6FE",
        lightPink: "#FDEEDC",
        lightGreen: "#E1FDE2",
      }, // close colors
      lineHeight: {
        12: "1.2",
        13: "1.3",
        16: "1.6",
      }, // close line height
    }, // close extend
    screens: {
      lg: { max: "1800px" },
      md: { max: "990px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    }, // close screens
    fontFamily: {
      IBMPlex: ["IBM Plex Sans", "sans-serif"],
    }, // close font family
  }, // close theme
  plugins: [], // close plugins
}; // close export
