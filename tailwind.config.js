/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#06070B',
          900: '#0A0D14',
          850: '#0F131E',
          800: '#141B2B',
          700: '#1E293B',
          600: '#334155',
        },
        electric: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          cyan: '#00F0FF',
          blue: '#3B82F6',
          indigo: '#6366F1',
        },
        accent: {
          purple: '#A855F7',
          violet: '#8B5CF6',
          magenta: '#EC4899',
          neon: '#C084FC',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.35)',
        'glow-purple': '0 0 35px -5px rgba(168, 85, 247, 0.35)',
        'glow-combined': '0 0 50px -10px rgba(139, 92, 246, 0.25), 0 0 30px -10px rgba(6, 182, 212, 0.3)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-card-hover': '0 14px 45px 0 rgba(168, 85, 247, 0.25)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}
