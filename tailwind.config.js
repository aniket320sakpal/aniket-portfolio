/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Lora', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#F7F4EF',
          2: '#EDE9E1',
        },
        surface: '#FFFFFF',
        text: {
          DEFAULT: '#1C1917',
          2: '#57534E',
          3: '#A8A29E',
        },
        accent: {
          DEFAULT: '#2D6A4F',
          2: '#52B788',
          light: '#D8F3DC',
          dark: '#215C42',
        },
        gold: {
          DEFAULT: '#B7791F',
          light: '#FEF3C7',
        },
        border: '#E7E0D5',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
