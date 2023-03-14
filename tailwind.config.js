/** @type {import('tailwindcss').Config} */
module.exports = {
  ontent: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)']
      }
    },
  },
  plugins: [],
}
