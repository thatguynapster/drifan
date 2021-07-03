const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '16px',
      lg: '1.25rem',
      xl: '1.375rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '4rem'
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '1rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '1.75rem',
      full: '9999px',
      large: '12px',
    },
    extend: {
      colors: {
        gray: {
          100: '#FAFAFA',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#6A6A6A',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: '#3950A2',
        primary: '#FF3860',
        secondary: '#25F9B3',
        green: {
          100: '#08B395',
          200: '#0C977F',
        },
        dark: {
          200: '#AEB6CA',
          500: '#3B4F6B',
          700: '#223551',
          900: '#000000',
        },
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: []
}
