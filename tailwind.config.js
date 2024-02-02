/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-gray': 'rgb(72,72,72)',
        'ikea-black': 'rgb(17,17,17)',
        'vermillon-red': 'rgb(204, 0, 8)',
      },
    },
  },
  plugins: [],
}

