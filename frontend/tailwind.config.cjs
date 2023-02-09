const withMT = require("@material-tailwind/html/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Catamaran', 'Poppins', 'sans-serif']
		},
		extend: {
			
			colors: {
				'newpurple': '#FFC0CB',
			},
		},
	},
	plugins: [],
});
