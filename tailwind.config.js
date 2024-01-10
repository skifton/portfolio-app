/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
  },
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        xs: "475px",
      },
    },
  },
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  plugins: [require("taos/plugin")],
};
