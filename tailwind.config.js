/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        blue: "#4880f4",
        dark: "#212529",
        slate: "#e9f0ff",
        "light-blue": "#cfe2ff",
        "slate-body": "#edf1fc",
        "gradient-blue":
          "linear-gradient(31deg, rgba(72,128,244,1) 37%, rgba(72,148,244,1) 100%)",
        "blue-hover": "rgba(72,148,244,1)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
