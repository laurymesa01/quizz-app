/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'purple': '#A729F5',
      'dark-navy': '#313E51',
      'navy': '#3B4D66',
      'grey-navy': '#626C7F',
      'light-bluish': '#ABC1E1',
      'light-grey': '#F4F6FA',
      'pure-white': '#FFFF',
      'green': '#26D782',
      'red': '#EE5454'
    },
    fontFamily: {
      'rubik': 'Rubik'
    },
    fontSize: {
      'xs': '14px',
      'sm': '20px',
      'base': '28px',
      'lg': '36px',
      '4xl': '64px',
      '8xl': '144px'
    },
    extend: {
      // backgroundImage: {
      //   'desktop-light': "url('images/pattern-background-desktop-light.svg')",
      //   'desktop-dark': "url('images/pattern-background-desktop-dark.svg')",
      //   'tablet-light': "url('/src/assets/images/pattern-background-tablet-light.svg')",
      //   'tablet-dark': "url('/src/assets/images/pattern-background-tablet-dark.svg')",
      //   'mobile-light': "url('/src/assets/images/pattern-background-mobile-light.svg')",
      //   'mobile-dark': "url('/src/assets/images/pattern-background-mobile-dark.svg')",

      // }
    },
  },
  plugins: [],
}

