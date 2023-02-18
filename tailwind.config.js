/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    gradientColorStops: {
      mainPrimary: "#051021",
      mainSecondary: "#031B34",
      secondPrimary: "#274060",
      secondSecondary: "#1B2845",
    },
    fontFamily: {
      handwriting: ["Courgette"],
    },
    screens: {
      sm: { min: "425px" },
      xxmd: { min: "900px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536" },
    },
    extend: {
      screens: {
        xs: { min: "320px" },
        xmd: { min: "543px" },
        xlg: { min: "1180px" },
        xxl: { min: "1636px" },
        exl: { min: "2560px" },
      },
      gridTemplateColumns: {
        6: "repeat(6, 1fr)",
        4: "repeat(4, 1fr)",
        3: "repeat(3, 1fr)",
        2: "repeat(2, 1fr)",
        1: "repeat(1, 100%)",
        proje1: "repeat(1,minmax(280px,560px))",
        proje2: "repeat(2,minmax(280px,560px))",
      },
      colors: {
        // bgMain: "#040C18",
        // bgMain: "#464f5b",
        // bgSecond: "#343a40",
        // bgThird: "#3a444e",
        bgMain: "#050A2C",
        bgSecond: "#060325",
        bgLight: "#ffffff",
        logoColor: "#C9B26D",
        text1: "#ced4da",
        text2: "#9da8b5",
        text3: "#aab8c5",
        text4: "#8391a2",
        textDark: "#878585",
        textDark2: "#6c757d",
        textDark3: "#98a6a4",
        textDark4: "#313a46",
        textDark5: "#adb5bd",
        textDark6: "#5F636A",
        textDark7: "#323232",
        textDark8: "#4B4B4B",
        textmuted: "#8391a2",
        linkColor: "#727cf5",
      },
      fontSize: {
        fs_xs: "12px",
      },
      boxShadow: {
        shadowBtn: "0 2px 6px 0 rgb(55,64,74 / 50%)",
        shadowSettings: "0 0 24px 0 rgb(241 241 241 / 10%)",
        btnShadow: "0 2px 6px 0 rgb(10 207 151 / 50%)",
        shadowHeader: "rgb(154 161 171 / 45%) 0px 0px 35px 0px",
      },
      animation: {
        spin: "spin 2s linear infinite",
        ring: "ring .5s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      // backgroundImage: {
      //   "login-background": "url('../src/assets/ppmloginbg1.jpg')",
      // },
    },
  },
  plugins: [],
  important: true,
};
