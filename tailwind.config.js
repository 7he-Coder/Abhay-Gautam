/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'smokey-black': 'hsl(0, 0%, 7%)',
        'eerie-black': 'hsl(0, 0%, 9%)',
        'radical-blue': 'hsl(232, 57%, 66%)',
        'PrimaryColor': 'hsl(256, 64%, 37%)',
        'radical-purple2': 'hsl(276, 98%, 81%)',
        'white_a9': 'hsla(0, 0%, 100%, 0.09)',
        'white_a15': 'hsla(0, 0%, 100%, 0.15)',
        'white_a25': 'hsla(0, 0%, 100%, 0.25)',
        'white_a50': 'hsla(0, 0%, 100%, 0.5)',
        'white_a70': 'hsla(0, 0%, 100%, 0.7)',
        'white_a75': 'hsla(0, 0%, 100%, 0.75)',
        'white_a80': 'hsla(0, 0%, 100%, 0.8)',
        'jet-1': 'hsl(0, 0%, 20%)',
        'jet-2': 'hsl(0, 0%, 16%)',
        'white': 'hsl(0, 0%, 100%)',
        'black': 'hsl(0, 0%, 0%)',
      },
      fontSize: {
        'HeadingText': '200px',
        'PrimaryText': '54px',
        'SecondaryText': '44px',
        'SuccessText': '34px',
        'PrimaryPara': '28px',
        'SecondaryPara': '18px',
      },
      fontFamily: {
        "ff-1": ["Archivo Black"],
        "ff-2": ["Archivo"],
        "ff-3": ["League Spartan"],
        "ff-4": ["Stalemate"],
        "ff-5": ["Fatherly"],
        "ff-Defualt": ["League Spartan", "Archivo Black", "Archivo", "Stalemate", "Fatherly-514Gj", "sans-serif"],
      },
      backgroundImage: {
        'Gradient-1': 'radial-gradient(circle at 94.35384114583333% 89.61588541666666%, #8786BE 0%, 20%, rgba(135, 134, 190, 0) 40%), radial-gradient(circle at 6.503906249999999% 88.037109375%, rgba(124, 105, 186, 0.99) 0%, 25%, rgba(124, 105, 186, 0) 50%), radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #42419E 0%, 42%, rgba(66, 65, 158, 0) 70%), radial-gradient(circle at 93.6865234375% 11.42578125%, #9757BF 0%, 42%, rgba(151, 87, 191, 0) 70%), radial-gradient(circle at 48.9013671875% 49.521484375%, #FFFFFF 0%, 100%, rgba(255, 255, 255, 0) 100%)',

        'Gradient-2': 'linear-gradient(180deg, transparent, var(--smokey-black))',

        'Gradient-3': 'linear-gradient(180deg, var(--smokey-black) 25%, hsla(0, 0%, 0%, 0.6) 80%)',
      },
      listStyleImage: {
        checkmark: 'url("./dist/assets/checkmark.png")',
      },
    },
  },
  plugins: [],
}

