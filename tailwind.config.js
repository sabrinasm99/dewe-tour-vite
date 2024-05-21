/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        "115px": "115px",
      },
      textColor: {
        "#FFAF00": "#FFAF00",
        "#878787": "#878787",
        "#A8A8A8": "#A8A8A8",
        "#808080": "#808080",
      },
      spacing: {
        "45px": "45px",
        "24%": "24%",
        "40%": "40%",
        "50%": "50%",
        "100px": "100px",
      },
      height: {
        "535.4px": "535.4px",
        "450px": "450px",
        "68px": "68px",
        "44px": "44px",
      },
      fontSize: {
        "60px": "60px",
        "40px": "40px",
        "50px": "50px",
        "58px": "58px",
        "17px": "17px",
        "15px": "15px",
        "10px": "10px",
      },
      width: {
        "10%": "10%",
        "90%": "90%",
        "85%": "85%",
        "80%": "80%",
        "20%": "20%",
        "350px": "350px",
        "44px": "44px",
      },
      backgroundColor: {
        "#FFAF00": "#FFAF00",
        "#F1F1F1": "#F1F1F1",
        "#D2D2D240": "#D2D2D240",
        backdrop: "rgba(0,0,0,0.5)",
        "#D3D3D3": "#D3D3D3",
      },
      boxShadow: {
        modal: "1px 1px 8px black",
      },
      borderColor: {
        totalPrice: "rgba(183, 183, 183, 0.5)",
        "#FFAF00": "#FFAF00",
        "#D3D3D3": "#D3D3D3",
      },
      backgroundImage: {
        pantai: `url('/src/modules/shared/images/pantai.png')`,
      },
      blur: {
        "1.8px": "1.8px",
      },
    },
  },
  plugins: [],
};
