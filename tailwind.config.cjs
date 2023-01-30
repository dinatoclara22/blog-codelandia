/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/index.html", "./src/**/*.{tsx,ts}"],
	theme: {
		extend: {
			fontFamily: {
				lexendDeca: ["Lexend Deca", "sans-serif"],
			},
		},
	},
	plugins: [],
};
