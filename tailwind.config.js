/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f97316',
          amber: '#fb923c',
          black: '#09090b',
          charcoal: '#18181b',
          slate: '#27272a',
          silver: '#a1a1aa',
          white: '#fafafa'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(249,115,22,0.18), 0 10px 40px rgba(249,115,22,0.18)',
        panel: '0 12px 40px rgba(0,0,0,0.35)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top right, rgba(249,115,22,0.22), transparent 35%), radial-gradient(circle at bottom left, rgba(255,255,255,0.06), transparent 28%)'
      }
    }
  },
  plugins: []
}
