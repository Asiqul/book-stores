/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        padding: '14px',
      },
    },
    fontFamily: {
      logo: ['Vino Sans', 'cursive'],
    },
  },
  plugins: [require('daisyui')],
};
