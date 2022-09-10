/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		fontSize: {
			xs: '0.875rem', // 14px
			base: '1rem', // 16px
			lg: '1.25rem', // 20px
			xl: '2rem', // 32px
			'2xl': '3rem' // 48px
		},
		fontFamily: {
			sans: ['Poppins', 'Helvetica', 'Arial'], // Default font
			nunito: ['Nunito', 'Helvetica', 'Arial'] // Optional font
		},
		borderRadius: {
			sm: '0.5rem', // 8px
			md: '1rem' // 16px
		},
		boxShadow: {
			DEFAULT: '0px 0px 8px rgba(69, 69, 69, 0.2)',
			md: '0px 0px 12px rgba(69, 69, 69, 0.3)'
		},
		maxWidth: {
			container: '750px'
		},
		colors: {
			blue: '#a0ebff',
			purple: '#dbceff',
			red: '#ce3131',
			green: '#13b176',
			gray: '#454545',
			lightgray: '#cfcfcf',
			black: '#000000',
			white: '#ffffff',
			overlay: '#000000b3'
		},
		extend: {}
	},
	plugins: []
};
