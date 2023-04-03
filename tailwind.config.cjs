/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		container: {
			center: true
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=lofi]'],
					primary: 'blue',
					'primary-focus': 'mediumblue',
					'accent-content': 'black'
				}
			},
			{
				myDark: {
					...require('daisyui/src/colors/themes')['[data-theme=dracula]'],
					'accent-content': '#f8fafc'
				}
			},
			{
				customDark: {
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					primary: '#363636',
					'primary-focus': '#1a1a1a',
					'primary-content': '#ffffff',
					secondary: '#363636',
					'secondary-focus': '#1a1a1a',
					'secondary-content': '#ffffff',
					accent: '#363636',
					'accent-focus': '#1a1a1a',
					'accent-content': '#ffffff',
					neutral: '#ffffff',
					'neutral-focus': '#f9fafb',
					'neutral-content': '#1f2937',
					'base-100': '#1a1a1a',
					'base-200': '#363636',
					'base-300': '#f9fafb',
					'base-content': '#ffffff'
				}
			}
		],
		darkTheme: 'customDark'
	}
};
