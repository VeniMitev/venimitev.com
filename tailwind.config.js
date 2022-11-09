/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '3/2': '3 / 2'
      },
      spacing: {
        '1': '0.25em',
        '2': '0.5em',
        '3': '0.75em',
        '4': '1em',
        '5': '2em',
        '6': '3em',
        '7': '4em',
        '8': '5em',
      }
    },
    borderRadius: {
      '4xl': '2rem'
    }
  },
  plugins: [],
}
