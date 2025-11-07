/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#F16521',
          hover: '#E35D1E',
          light: 'rgba(241, 101, 33, 0.1)',
        },
        light: {
          bg: '#FDFDFC',
          text: {
            primary: '#1b1b18',
            secondary: '#706f6c',
          },
          border: '#e3e3e0',
          card: '#FFFFFF',
        },
        dark: {
          bg: '#0a0a0a',
          text: {
            primary: '#EDEDEC',
            secondary: '#A1A09A',
          },
          border: '#3E3E3A',
          card: '#161615',
        },
      },
      fontFamily: {
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

