/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");


// Disable backticks around inline code blocks
const proseTheme = {
	'code::before': false,
	'code::after': false,
}

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
			typography: {
				DEFAULT: { css: proseTheme }
			}
		},
	},
	plugins: [require("windy-radix-palette"), require('@tailwindcss/typography')],
}
