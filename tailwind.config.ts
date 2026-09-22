module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(96, 165, 250, 0.35)',
      },
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d7ebff',
          200: '#baddff',
          300: '#8cc8ff',
          400: '#5aa7ff',
          500: '#2f82ff',
          600: '#1f63d9',
          700: '#1d4fb1',
          800: '#1d3f88',
          900: '#1d376f',
        },
      },
    },
  },
  plugins: [],
}
