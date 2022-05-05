// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.tsx'],

  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257e6',
        },
      },
    },
  },

  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms')],
};
