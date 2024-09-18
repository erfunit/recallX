/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '3rem',
		},
		extend: {
			colors: {
				primary: '#76ABAE',
				secondary: '#31363F',
				darkContent: '#222831',
				lightContent: '#EEEEEE',
			},
			fontFamily: {
				quicksand: ['Quicksand', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
