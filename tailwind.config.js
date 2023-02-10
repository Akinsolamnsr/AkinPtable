/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      screens: {
        'Lx': '800px',}
    },
    
  },
  plugins: [
    require('flowbite/plugin'),
    
  ],
  
}
