//import nth from 'tailwindcss-nth-child';
const Nth = require('tailwindcss-nth-child');
const plugin = new Nth('odd');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
      maxWidth: {
        'page-content': '1440px',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      scale: ['active', 'hover'],
      backgroundColor: ['nth-child'],
    },
  },
  plugins: [plugin.nthChild()],
};
