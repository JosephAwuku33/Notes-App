/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "../NotesApp/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: '#F8EEE2',
      secondary: '#D9614C',
      'white': '#fff',
    },
    width: {
      '319': '20rem',
    },
    height: {
      '74': '5rem'
    }
  },
  plugins: [],
}
