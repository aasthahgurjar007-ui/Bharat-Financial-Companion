/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070b19',
          900: '#0b1329',
          850: '#101c3d',
          800: '#172554',
          700: '#1e3a8a',
          600: '#2563eb',
        },
        bharat: {
          saffron: '#FF671F',
          gold: '#F59E0B',
          orange: '#EA580C',
          green: '#047857',
          emerald: '#10B981',
          teal: '#0D9488',
          indigo: '#4F46E5',
          purple: '#8B5CF6'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Noto Sans Devanagari', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'glow-saffron': '0 0 25px -5px rgba(255, 103, 31, 0.45)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.45)',
        'glow-indigo': '0 0 25px -5px rgba(99, 102, 241, 0.45)',
      }
    },
  },
  plugins: [],
}
