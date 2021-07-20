const Nth = require('tailwindcss-nth-child');
const { width } = require('tailwindcss/defaultTheme');
const plugin = new Nth('even');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
      },
      spacing: {
        128: '32rem',
      },
      screens: {
        mob: '320px',
        def: '1300px',
      },
      transitionProperty: {
        width: 'width',
        display: 'display',
      },
      divideColor: theme => ({
        ...theme('borderColors'),
        dark: '#444444',
      }),
      scale: {
        '300': '3',
      },
      textColor: {
        'dark-txt': '#444444',
      },
      maxWidth: {
        'sidebar-content': '300px',
        'page-content': '1000px',
        'img-content': '50px',
      },
      minHeight: {
        'with-header': 'calc(100% - 54px)',
      },
      height: {
        '3px': '3px',
      },
      width: {
        'half-screen': '50vw',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      scale: ['active', 'hover'],
      backgroundColor: ['nth-child'],
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'active'],
      borderRadius: ['hover', 'active'],
      cursor:['hover']
    },
  },
  plugins: [
    plugin.nthChild(),
    require('tailwindcss-transitions'),
    require('@tailwindcss/forms'),
  ],

};
