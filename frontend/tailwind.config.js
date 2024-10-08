/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#030302",
        yellowColor: "#FEC60D",
        purpleColor: "#9771FF",
        headingColor: "#181A1E",
        textColor: "#4E545F",
        custombg: "#f2edef",
      },
      
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.5) 0px 48px 100px 0px;",
      }
    },
  },
  plugins: [],
}

