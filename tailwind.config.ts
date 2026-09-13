import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#101419',
          'navy-light': '#1a1f28',
          gold: '#30b8e5',
          'gold-light': '#5cc8ed',
          'gold-dark': '#1a9bc4',
          cyan: '#30b8e5',
          indigo: '#3a3e96',
          dark: '#101419',
        },
      },
      fontFamily: {
        arabic: ['Tajawal', 'sans-serif'],
        english: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #30b8e5 0%, #3a3e96 100%)',
        'gradient-navy': 'linear-gradient(180deg, #101419 0%, #1a1f28 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
