/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"], // or simply ["./*.{html,js}"]
	theme: {
		extend: {
			keyframes: {
				orbit: {
					"0%": {
						transform:
							"rotate(0deg) translateX(150px) rotate(0deg)",
					},
					"100%": {
						transform:
							"rotate(360deg) translateX(150px) rotate(-360deg)",
					},
				},
			},
			animation: {
				orbit: "orbit 10s linear infinite",
			},
		},
	},
};
