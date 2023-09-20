/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lt: '350px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        "max-w-xl": "1080px",
      },
      colors: {
        primary: '#150E28',
        secondary: {
          1: '#903AFF',
          2: '#D434FE'
        }
    },
    },
  },
  plugins: [],
}

