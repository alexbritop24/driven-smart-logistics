/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dsl: {
          black: '#0A0A0A',
          panel: '#111111',
          soft: '#1A1A1A',
          gray: '#A3A3A3',
          line: '#262626',
          orange: '#F97316',
          orangeSoft: '#FB923C',
          white: '#FAFAFA',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(249, 115, 22, 0.15), 0 10px 30px rgba(249, 115, 22, 0.08)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top right, rgba(249,115,22,0.22), transparent 28%), radial-gradient(circle at left center, rgba(255,255,255,0.06), transparent 22%)',
      },
    },
  },
  plugins: [],
}