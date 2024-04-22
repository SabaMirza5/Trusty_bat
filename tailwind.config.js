/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'bg-color':'#0E0E0E',  
        'text-color':'#00A2E9',
        'text-pera':'#8F8F8F',
      },



    },
  },
  plugins: [],
}