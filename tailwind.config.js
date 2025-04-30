/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#FFCD00',
          500: '#E5B800',
        },
        pink: {
          200: '#FDD1E5',
          800: '#9C174D',
        },
        breakdown: {
          yellow: '#FFD84D',
          green: '#40C4AA',
          coral: '#FF9F7B',
          blue: '#7BD5F5',
          pink: '#F4A4D1',
          lime: '#B8E986',
          gray: '#A4A4A4',
          beige: "#F6F3EF",
        }
      },
      fontFamily: {
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};