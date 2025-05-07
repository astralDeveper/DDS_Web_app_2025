// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class",
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     fontFamily: {
//       poppins: "Poppins",
//     },
//     extend: {
//       backgroundImage: {
//         "hero-pattern": "url('./src/Assets/servicedetailbanner.png')",
//         "ceo-pattern": "url('../public/images/ceobgimg.png')",
//       },
//       keyframes: {
//         scroll: {
//           to: { transform: "translate(calc(-50% - 2.5rem))" },
//         },
//       },
//       animation: {
//         carousel: "scroll 25s forwards linear infinite",
//       },
//       colors: {
//         white_color: "#ffffff",
//         blue_color: "#097BDF",
//         cyan_color: "#039FB7",
//         yellow_color: "#FACC07",
//         dark_gray_color: "#424242",
//         gray_color: "#5E5E5E",
//         light_gray_color: "#DADADA",
//         mainColor: "#262626",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/Assets/servicedetailbanner.png')",
        "ceo-pattern": "url('../public/images/ceobgimg.png')",
      },
      height: {
        'fill-available': '-webkit-fill-available',
      },
      keyframes: {
        scroll: {
          to: { transform: "translate(calc(-50% - 2.5rem))" },
        },
      },
      animation: {
        carousel: "scroll 25s forwards linear infinite",
      },
      colors: {
        white_color: "#ffffff",
        blue_color: "#097BDF",
        cyan_color: "#039FB7",
        yellows_color: "#FACC07",
        dark_gray_color: "#424242",
        gray_color: "#5E5E5E",
        light_gray_color: "#DADADA",
        yellow_color: "#191919",
        dark_color: "#232323",
        mainColor: "#343434",
        text_color: "#A7A7A7",
      },
    },
  },
  plugins: [],
};
