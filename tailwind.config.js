/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#8BC34A',
        secondaryColor: '#F7F7F7',
       textColor:'rgba(0, 0, 0, 0.60)',
      },
      backgroundImage:{
        primaryBg:'linear-gradient(205deg, #32A6FC 0%, #414E59 100%)'
      }
    }
  },
  plugins: [require("daisyui")],
}
