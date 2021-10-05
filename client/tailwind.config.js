module.exports = {
  purge: [],
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
    extend: {},
  },
  plugins: [],
}
