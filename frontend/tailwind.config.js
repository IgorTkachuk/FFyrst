const Nth = require('tailwindcss-nth-child');
const plugin = new Nth('even');

const colors = {
  'custom-gray': '#BCC3CE',
  'custom-dark-gary': '#4C5767',
  'custom-field': '#DBDBDB',
  'custom-inactive': '#B4C0CD',
  'custom-placeholder': '#BCC3CE',
  'custom-black': '#202020',
  'custom-background': '#FAFAFA',
  'custom-blue': '#083D77',
  'custom-green': '#1B9AAA',
  'custom-orange': '#F87060',
  'custom-red': '#BB1128',
  'custom-white': '#FFFFFF',
  'custom-dark-blue': '#052D58',
  'custom-hover': '#17569C',
};

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
      outline: {
        non: '1px solid #F9FAFB',
      },
      spacing: {
        128: '32rem',
      },
      screens: {
        mob: '320px',
        def: '1300px',
      },
      divideColor: theme => ({
        ...theme('borderColors'),
        dark: '#444444',
      }),
      textColor: { ...colors },
      backgroundColor: { ...colors },
      borderColor: { ...colors },
      ringColor: { ...colors },
      minWidth: {
        'side-collapse-content': '50px',
        'sidebar-content': '220px',
      },

      maxWidth: {
        'sidebar-content': '300px',
        'page-content': '1000px',
        'img-content': '24px',
        'select-content': '200px',
        'btn-content': '154px',
        'small-input': '250px',
        'medium-input': '350px',
        'side-collapse-content': '50px',
        'big-input': '500px',
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
    fontSize: {
      ss: '.50rem',
      'page-name': '3rem',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },

  },
  variants: {
    extend: {
      borderColor: ['checked'],
      appearance: ['hover', 'focus', 'checked', 'active'],
      display: ['group-hover'],
      scale: ['active', 'hover'],
      backgroundColor: ['nth-child,checked'],
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'active'],
      borderRadius: ['hover', 'active'],
      cursor: ['hover'],
    },
  },
  plugins: [
    plugin.nthChild(),
    require('tailwindcss-transitions'),
    require('@tailwindcss/forms'),
  ],

};
