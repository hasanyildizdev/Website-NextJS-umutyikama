/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        clean: {
          '0%': {transform: 'translateX(0%)'},
          '100%': { transform: 'translateX(150%)'}
        },
        clean2: {
          '0%': {transform: 'translateX(150%)'},
          '100%': { transform: 'translateX(0%)'}
        },
        vacuum:{
          '0%':{transform:'translatX(0%)'},
          '100%':{transform:'translateX(45%)'}
        },
        showUp:{
          '0%,100%':{ opacity:0},
          '50%':{opacity:1}
        }
      },
    },
    colors: {
      'bgblack':'#000000',
      'bgyellow': '#fdfaa9',
      'bgblue1':'#00BBBB',//00a5b5 20AFBE 00c9c9 00BA9B 00BBBB
      'bgblue2': '#00C5FF',
      'bgwhite': '#FFFFFF',
    }
  },
  plugins: [],
}
