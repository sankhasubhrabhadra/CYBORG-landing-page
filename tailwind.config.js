/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          950: '#040507',
          900: '#07090e',
          850: '#0c1017',
          800: '#111722',
          700: '#1a2332',
          600: '#253245',
          border: 'rgba(0, 243, 255, 0.14)',
          'border-subtle': 'rgba(255, 255, 255, 0.08)',
          'card-bg': 'rgba(10, 14, 22, 0.7)',
        },
        neon: {
          cyan: '#00f3ff',
          'cyan-dim': 'rgba(0, 243, 255, 0.2)',
          'cyan-glow': 'rgba(0, 243, 255, 0.4)',
          violet: '#8b5cf6',
          'violet-glow': 'rgba(139, 92, 246, 0.4)',
          purple: '#a855f7',
          emerald: '#10b981',
          rose: '#f43f5e',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['Space Mono', 'JetBrains Mono', 'monospace'],
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(0, 243, 255, 0.35)',
        'neon-cyan-lg': '0 0 50px -10px rgba(0, 243, 255, 0.45)',
        'neon-violet': '0 0 25px -5px rgba(139, 92, 246, 0.35)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(0, 243, 255, 0.12)',
        'cyber-card-hover': '0 12px 40px -5px rgba(0, 243, 255, 0.25), inset 0 0 0 1px rgba(0, 243, 255, 0.4)',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, rgba(0, 243, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 243, 255, 0.03) 1px, transparent 1px)',
        'cyber-dots': 'radial-gradient(rgba(0, 243, 255, 0.15) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(circle at center, rgba(0, 243, 255, 0.08) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}
