/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          100: '#141219',
          200: '#231F2B',
          300: '#240046',
          400: '#3C096C',
          500: '#5A189A',
          600: '#7B2CBF',
          700: '#9D4EDD',
          800: '#C77DFF',
          900: '#E0AAFF',
        },
      }
    },
  },
  plugins: [],
}
