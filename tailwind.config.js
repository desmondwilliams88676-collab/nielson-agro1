/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#1F6B3A',
          50: '#e8f5ee',
          100: '#c3e4d1',
          200: '#9dd3b3',
          300: '#77c295',
          400: '#51b178',
          500: '#1F6B3A',
          600: '#1a5c32',
          700: '#154d29',
          800: '#103e21',
          900: '#0b2f18',
        },
        blue: {
          DEFAULT: '#1E5AA8',
          50: '#e8eef8',
          100: '#c3d3ee',
          200: '#9eb8e4',
          300: '#789dda',
          400: '#5382d0',
          500: '#1E5AA8',
          600: '#1a4e92',
          700: '#16417c',
          800: '#123466',
          900: '#0e2850',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.webp')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cta': 'linear-gradient(135deg, #1F6B3A 0%, #1E5AA8 100%)',
      },
    },
  },
  plugins: [],
}
