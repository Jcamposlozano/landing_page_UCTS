/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3DB28C',
          light: '#5bc4a0',
          dark: '#00557D',
          navy: '#12326E',
          50: '#e8f7f2',
          100: '#d1efe5',
          200: '#a3dfcb',
          300: '#75cfb1',
          400: '#47bf97',
          500: '#3DB28C',
          600: '#318e70',
          700: '#256b54',
          800: '#00557D',
          900: '#12326E',
        },
      },
    },
  },
  plugins: [],
}

