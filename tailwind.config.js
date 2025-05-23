/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Mono', 'monospace'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};