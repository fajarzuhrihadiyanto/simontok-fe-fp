/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#52459F',
        secondary: '#FA896B',
        light: '#F2E8FF',
        slight: '#FEF3F1',
        forhoverprimary: '#201466'
      }
    },
    fontFamily: {
      'sans': ['Nunito', ...defaultTheme.fontFamily.sans],
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
