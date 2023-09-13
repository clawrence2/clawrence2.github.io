/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'inter':['Inter', 'sans-serif']
      },
      keyframes:{
        scrollage: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation:{
        scrollage: 'scrollage 60s linear infinite',
      },
      screens:{
        'my10' : '1000px',
        'my14':'1440px',
        
      },
    },
  },
  plugins: [],
}
