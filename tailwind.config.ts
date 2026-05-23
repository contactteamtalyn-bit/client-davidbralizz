import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivoire: '#FDFAF6',
        tanin: { DEFAULT: '#7D4E2D', clair: '#FBF4EE' },
        creme: '#F0E8DC',
        noir: { DEFAULT: '#1A1714', profond: '#0F0C0A' },
        cuivre: '#B8825A',
      },
      fontFamily: {
        display: ['var(--font-marcellus)', 'Georgia', 'serif'],
        sans: ['var(--font-karla)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'silk-flow': {
          '0%': { transform: 'translateX(-7%) translateY(0)' },
          '50%': { transform: 'translateX(7%) translateY(-2%)' },
          '100%': { transform: 'translateX(-7%) translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
        'silk-flow': 'silk-flow 16s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
