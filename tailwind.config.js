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
      },
      spacing: {
        '45px': '45px',
        '24%': '24%',
        '40%': '40%',
      },
      height: {
        '535.4px': '535.4px',
        '450px': '450px'
      },
      fontSize: {
        '60px': '60px',
        '40px': '40px',
        '50px': '50px',
        '58px': '58px',
        '17px': '17px',
        '15px': '15px',
        '10px': '10px'
      },
      width: {
        '10%': '10%',
        '90%': '90%',
        '85%': '85%',
        '80%': '80%',
        '20%': '20%',
      },
      backgroundColor: {
        '#FFAF00': '#FFAF00'
      }
    },
  },
  plugins: [],
}

