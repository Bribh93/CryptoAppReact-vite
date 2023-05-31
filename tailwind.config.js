/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'navy-radix': '#14151C',
        'pink-fondo-radix': '#2B1926',
        'pink-radix': '#FC4583'
      }
    },
  },
  plugins: [],
}
