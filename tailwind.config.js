/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Bangers"', 'sans-serif'],
        heading: ['"Carter One"', 'sans-serif'],
        body: ['"Signika"', 'sans-serif'],
      },
      colors: {
        'primary': '#011728',
        'secondary': '#13A680',
        'tertiary': '#272926',
    },
      screens: {
        xxs: '320px',
        xs: '390px',
        xsm: '480px',
        mobile: '576px',
        sm: '640px',
        md: '768px',
        '2md': '840px',
        tablet: '960px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1440px',
        '3xl': '1536px',
      },
  },
  plugins: [],
}
}