/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.{md,markdown}',
    './*.md',
    './*.html',
    './blog/**/*.{html,md}',
    './docs/**/*.{md}'
  ],
  theme: {
    extend: {
      colors: {
        'azure-blue': '#0078D4',
        'mlops-orange': '#f68b1e'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ]
};
