/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": false,
            "code::after": false,
						"blockquote p:first-of-type::before": false,
						"blockquote p:first-of-type::after": false
          },
        },
      },
    },
  },
  plugins: [require("windy-radix-palette"), require("@tailwindcss/typography")],
};
