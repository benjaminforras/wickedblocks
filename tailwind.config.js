const colors = require('tailwindcss/colors')
const defaultColors = require(`tailwindcss/defaultTheme`).colors;
const allColors = require(`tailwindcss/colors`);

const extendedColors = defaultColors;

module.exports = {
  purge: {
    enabled: true,
    content: [
      './public/**/*.html',
      './public/*.html',
      './src/**/*.js',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '0': 0,
       '10': 10,
       '20': 20,
       '30': 30,
       '40': 40,
       '50': 50,
       '25': 25,
       '50': 50,
       '75': 75,
       '100': 100,
        'auto': 'auto',
      },

      boxShadow: {
        smallest: '0px 4px 8px rgba(248, 250, 252, 0.12)',
        small: '0 5px 10px rgba(248, 250, 252, 0.12)',
        DEFAULT: '0 8px 30px rgba(248, 250, 252, 0.12)',
        large: '0 30px 60px rgba(248, 250, 252, 0.12)',
        hover: '0 30px 60px rgba(248, 250, 252, 0.12)',
        stycky: '0 12px 10px -10px rgba(248, 250, 252, 0.12)',
        dropdown: '0 4px 4px 0 rgba(248, 250, 252, 0.02)',

      },
      fontSize: {
       'xs': '.75rem',
       'sm': '.875rem',
       'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
       '3xl': '1.875rem',
       '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
       '7xl': '5rem',
      },
      height: {
        threescreen: '75vh',
        halfscreen: '50vh',
      },
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      coolGray: colors.coolGray,
      trueGray: colors.trueGray,
      coolGray:colors.coolGray,
      blueGray: colors.blueGray,
      red: colors.red,
      orange:colors.orange,
      yellow: colors.yellow,
      lime:colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      cyan: colors.cyan,
      lightBlue:colors.lightBlue,
      teal: colors.teal,
      blue: colors.blue,
      indigo: colors.indigo,
      violet:colors.violet,
      purple: colors.purple,
      pink: colors.pink,
      fuchsia:colors.fuchsia,
      rose: colors.rose,

        primary: {
        1: '#2D79F8',

        },
        cta: {
        1: '#111213',

        },


          dark: {
            1: '#01020A',
            2: '#161c25',
            3: '#252f3e',
            4: '#334156',
            5: '#42546f',

        },
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
