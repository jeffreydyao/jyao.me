const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter Display", fontFamily.sans],
        sans: ["Inter", fontFamily.sans]
      }
    }
  },
  plugins: [],
  presets: [require("windy-radix-palette")]
}
