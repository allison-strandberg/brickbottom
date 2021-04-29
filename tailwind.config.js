/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        buildingTop: '6%',
        'ground-window': '65%'
      },
      width: {
        buildingCenter: '59%',
      },
      gridTemplateRows: {
        building: 'repeat(4, minmax(0, 16.8%)) 6% 13.5%',
        window: '1fr 25%',
      },
      gridTemplateColumns: {
        header: '18.5% 1fr 18.5%',
        door: '54.4% 40%',
        'ground-window': '3.5% 39% 12% 40% 1fr'
      },
      gap: {
        buildingX: '4%',
        buildingY: '1.5%',
      },
      fontSize: {
        buildingXs: ['0.75rem', '250%'],
        buildingSm: ['0.875rem', '250%'],
        buildingBase: ['1rem', '250%'],
        buildingLg: ['1.125rem', '250%'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        teal: {
          DEFAULT: '#2da5ce',
        },
        beige: {
          DEFAULT: '#fff5ff',
        },
        red: {
          DEFAULT: '#a91515',
        },
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
      },
      minWidth: {
        lg: '1140px',
      },
      minHeight: {
        '2rem': '2rem',
      },
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
