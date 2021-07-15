const Nth = require('tailwindcss-nth-child');
const { width } = require('tailwindcss/defaultTheme');
const plugin = new Nth('even');

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
      height: {
        '3px': '3px'
      },
      width: {
        'half-screen': '50vw',
      }
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
  plugins: [require('@tailwindcss/forms'), plugin.nthChild()],
};
