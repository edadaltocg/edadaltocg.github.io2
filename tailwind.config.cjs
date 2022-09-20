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
					'primary-focus': 'mediumblue'
				}
			},
			{
				myDark: {
					...require('daisyui/src/colors/themes')['[data-theme=black]'],
					'accent-content': '#f8fafc'
				}
			}
		],
		darkTheme: 'myDark'
	}
};
