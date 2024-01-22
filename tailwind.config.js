/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html,js}'],
  theme: {
    center: true,
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  container: {
    center: true,
    padding: '2rem',
  },
  daisyui: {
    themes: [],
  },
  plugins: [require('daisyui')],
};
