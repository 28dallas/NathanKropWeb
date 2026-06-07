/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:    '#0a0a08',
        paper:  '#f5f0e8',
        gold:   '#c9963a',
        amber:  '#e8b14a',
        dim:    '#141410',
        'dim-2':'#1a1a16',
        muted:  '#8a8578',
        border: '#2a2a22',
        card:   '#0f0f0c',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono:    ['Space Mono', 'Courier New', 'monospace'],
        sans:    ['Syne', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
