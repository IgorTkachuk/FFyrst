module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
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
