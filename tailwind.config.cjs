/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('/images/header-background.png')",
      },
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        blue: {
          400: '#3294F8',
        },
        slate: {
          100: '#E7EDF4',
          200: '#C4D4E3',
          300: '#AFC2D4',
          400: '#7B96B2',
          500: '#3A536B',
          600: '#1C2D41',
          700: '#112131',
          800: '#0B1B2B',
          900: '#071422',
          950: '#040F1A',
        },
      },
      fontSize: {
        'title-l': '1.5rem',
        'title-m': '1.25rem',
        'title-s': '1.125rem',
        'text-m': '1rem',
        'text-s': '0.875rem',
      },
    },
  },
  plugins: [],
}
