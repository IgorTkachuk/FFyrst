module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      maxWidth: {
        'page-content': '1440px',
      },
      flex: {
        '1/3': '0 0 33.3333%',
      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      scale: ['active', 'hover'],
    },
  },
  plugins: [],
};
