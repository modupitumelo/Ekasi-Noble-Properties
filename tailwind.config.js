/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0f172a',
          soft: '#1e293b',
          muted: '#64748b',
        },
        sky: {
          DEFAULT: '#0ea5e9',
          soft: '#7dd3fc',
          deep: '#0369a1',
        },
        sand: {
          DEFAULT: '#f1f5f9',
          2: '#e2e8f0',
          3: '#cbd5e1',
        },
        line: '#cbd5e1',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
