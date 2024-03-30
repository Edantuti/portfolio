/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
fontSize: {
  sm: '0.750rem',
  base: '1rem',
  xl: '1.333rem',
  '2xl': '1.777rem',
  '3xl': '2.369rem',
  '4xl': '3.158rem',
  '5xl': '4.210rem',
},
fontFamily: {
  geist:"Geist"
},
    },
  },
  plugins: [],
}

