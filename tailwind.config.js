/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      padding: {
        '115px': '115px'
      },
      textColor:{
        'priceColor': '#FFAF00',
        'placeColor': '#878787'
      }
    },
  },
  plugins: [],
}

