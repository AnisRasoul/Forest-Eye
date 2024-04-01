module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    // ...
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primaryb: "#3887BE",
        primary: "#200E3A",
        secondary: "#52D3D8",
        third: "#38419D",
        forth: "#271245",
        grayP: "#D5D2D2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
