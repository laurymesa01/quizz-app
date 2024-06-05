/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
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
      'xs': '12px',
      'base': '28px',
      'lg': '36px',
      '4xl': '64px',
      '8xl': '144px'
    },
    extend: {},
  },
  plugins: [],
}

