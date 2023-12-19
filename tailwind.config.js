/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      /*colors:{
        'azul':'#243cff'
      }*/

      backgroundImage:{
        'wave-pattern': 'url(../img/wave-white.png)',
        'wave-pattern-dots': 'url(../img/pattern-white-dots.png)'
      },
      screens:{
        'xsm': '320px'
      }
    },
  },
  plugins: [],
}

