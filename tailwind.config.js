/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003f5c',
          light: '#2f7ca7',
          dark: '#002c44',
        },
        secondary: {
          DEFAULT: '#e63946',
        },
        neutral: {
          light: '#f5f5f5',
          dark: '#333333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};