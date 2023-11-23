/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',
      // => @media (min-width: 640px) { ... }

      'tablet': '744px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      '4k':'1440px',
    },
    extend: {
      colors:{
        'yellow':'#FFE200',
        'blueTestimonial':'#0A6FE3',
        'skyBlue':'#2A94FD',
        'skyBlueHover':'#027ffc',
        'darkBlue':'#0D2E59',
        'hardBlue':'#17223d',
        'dark-gray':'#192640',
        'dark-gray-400':'#223148',
        'dark-gray-300':'2A3C4F',
        'dark-gray-200':'#334657',
        'dark-gray-100':'#3C515E',
        'error-style':'#DC2626'
      },
      fontFamily:{
        roboto:['roboto']
      }
    },
  },
  plugins: [],
}

