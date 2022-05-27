const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter Display", fontFamily.sans],
        sans: ["Inter", fontFamily.sans]
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.12"),
            h1: {
              fontSize: "1.5rem",
              fontFamily: "Inter Display",
              fontWeight: "700",
              marginTop: "2.15rem"
            },
            h2: {
              fontSize: "1.25rem",
              fontFamily: "Inter Display",
              fontWeight: "700"
            },
            h3: {
              fontSize: "1.125rem",
              fontFamily: "Inter Display",
              fontWeight: "700"
            },
            "code::before": {
              content: "none"
            },
            "code::after": {
              content: "none"
            },
            "--tw-prose-bullets": theme("colors.gray.10"),
            "--tw-prose-counters": theme("colors.gray.10")
          }
        }
      })
    }
  },
  darkmode: "class",
  plugins: [require("@tailwindcss/typography"), require("tailwind-hamburgers")],
  presets: [require("windy-radix-palette")]
}
