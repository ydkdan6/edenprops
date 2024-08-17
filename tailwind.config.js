/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#ff8210',
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Overpass', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
