/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    colors: {
      // Primary
      'blue': 'hsl(246, 80%, 60%)',
      'orange': 'hsl(15, 100%, 70%)',
      'soft-blue': 'hsl(195, 74%, 62%)',
      'light-red': 'hsl(348, 100%, 68%)',
      'lime-green': 'hsl(145, 58%, 55%)',
      'violet': 'hsl(264, 64%, 52%)',
      'soft-orange': 'hsl(43, 84%, 65%)',

      // Neutral
      'very-dark-blue': 'hsl(226, 43%, 10%)',
      'dark-blue': 'hsl(235, 46%, 20%)',
      'desaturated-blue': 'hsl(235, 45%, 61%)',
      'pale-blue': 'hsl(236, 100%, 87%)',
      'white': 'hsl(0, 100%, 100%)'
    },
    extend: {}
  },
  plugins: [],
}
