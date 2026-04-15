import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cipher: {
          pink: '#FF50C0',
          orange: '#EF5E27',
          granite: '#1C1C1C',
          surface: '#252525',
          grey: '#B0B0B0',
        },
      },
      fontFamily: {
        heading: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
        body: ['var(--font-zilla)', 'Georgia', 'serif'],
      },
      boxShadow: {
        'pink-glow': '0 0 24px rgba(255, 80, 192, 0.35)',
        'pink-glow-lg': '0 0 48px rgba(255, 80, 192, 0.5)',
      },
      backgroundImage: {
        'grain':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 16px rgba(255, 80, 192, 0.3)' },
          '50%': { boxShadow: '0 0 32px rgba(255, 80, 192, 0.6)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
