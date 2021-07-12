const Nth = require('tailwindcss-nth-child');
const plugin = new Nth('even');

const getGridOptions = () => {
  const MAX_COLUMNS = 20;
  const options = {};
  for (let i = 1; i < MAX_COLUMNS; i++) {
    options[i] = `repeat(${i}, 1fr)`;
  }
  return options;
};

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
      gridTemplateColumns: getGridOptions(),
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
