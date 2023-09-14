/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    container: {
      center: true
    }
  },
  // important: "html",
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=lofi]']
          // primary: 'blue',
          // 'primary-focus': 'mediumblue',
          // 'accent-content': 'black'
        }
      },
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=black]']
          // 'accent-content': '#f8fafc'
        }
      },
      {
        customDark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]']
          // primary: '#363636',
          // 'primary-focus': '#1a1a1a',
          // 'primary-content': '#ffffff',
          // secondary: '#363636',
          // 'secondary-focus': '#1a1a1a',
          // 'secondary-content': '#ffffff',
          // accent: '#363636',
          // 'accent-focus': '#1a1a1a',
          // 'accent-content': '#ffffff',
          // neutral: '#ffffff',
          // 'neutral-focus': '#f9fafb',
          // 'neutral-content': '#1f2937',
          // 'base-100': '#1a1a1a',
          // 'base-200': '#363636',
          // 'base-300': '#f9fafb',
          // 'base-content': '#ffffff'
        }
      }
    ],
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true // Shows info about daisyUI version and used config in the console when building your CSS
  }
};
