/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff5200',
        secondary: '#ffffff',
        tertiary: '#f0f0f5',
      },
    },
  },
  plugins: [],
}

