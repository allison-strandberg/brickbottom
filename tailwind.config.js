/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      teal: {
        DEFAULT: '#14bbca',
      },
      beige: {
        DEFAULT: '#e4d6bc',
      },
      red: {
        DEFAULT: 'a91515',
      },
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
    },
    fontFamily: {
      fredericka: ['"Fredericka the Great"', 'serif'],
      'open-sans': ['open-sans', 'sans-serif'],
      josefin: ['"Josefin Slab"', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
