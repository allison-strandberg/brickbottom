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
        DEFAULT: '#00a6bf',
      },
      beige: {
        DEFAULT: '#e1d4d1',
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
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      16: '16px',
      32: '32px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
