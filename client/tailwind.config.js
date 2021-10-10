module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'primary': '#ffff00',
      'secondary': '#9395ff',
      'danger': '#FF5420',
      'trp': 'transparent',
    }),
    borderColor: theme => ({
      'primary': '#ffff00',
      'secondary': '#9395ff',
      'danger': '#FF5420',
      'trp': 'transparent',
    }),
    textColor: theme => ({
      'primary': '#ffff00',
      'secondary': '#9395ff',
      'danger': '#FF5420',
      'trp': 'transparent',
    })
  },
  variants: {
    extend: {

      spacing: {

        '192': '48rem',

      }
    },
  },
  plugins: [],
}