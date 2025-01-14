/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./resources/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-raro': '#5221e4c4',
        'azul-oscuro':'#5a4695c4',
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
      backgroundImage: {
        'background-i': "url('/resources/assets/images/bacground.jpg')",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
