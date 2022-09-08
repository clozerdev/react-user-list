/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		fontSize: {
			role: '0.75rem', // 12px
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
			DEFAULT: '0px 0px 8px',
			md: '0px 0px 12px'
		},
		maxWidth: {
			container: '1280px'
		},
		extend: {
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
			}
		}
	},
	plugins: []
};
