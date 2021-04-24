/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        buildingTop: '5.5%',
      },
      width: {
        buildingCenter: '64.5%',
      },
      gridTemplateRows: {
        building: 'repeat(4, minmax(0, 23%))',
        window: '1fr 25%',
      },
      gap: {
        buildingX: '4%',
        buildingY: '2%',
      },
      fontSize: {
        buildingXs: ['0.75rem', '250%'],
        buildingSm: ['0.875rem', '250%'],
        buildingBase: ['1rem', '250%'],
        buildingLg: ['1.125rem', '250%'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      teal: {
        DEFAULT: '#187b97',
      },
      beige: {
        DEFAULT: '#e1d4d1',
      },
      red: {
        DEFAULT: '#a91515',
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
      md: '820px',
      lg: '1140px',
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
