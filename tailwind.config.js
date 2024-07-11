/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily:{}
    },
    colors: {
        'primary-gray': '#415263',
        'light-gray': '#F4F1ED',
        'beige': '#E7BDA6',
        'primary-white': '#F4F1ED',
        'btn-beige-important': '#E7BDA6 !important',
    },
  },
  plugins: [],
}

