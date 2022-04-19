module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['HelveticaNeue', 'sans-serif'],
      },
      colors: {
      },
      height: {
        screen: 'calc(var(--vh) * 100)',
      },
      minHeight: {
        screen: 'calc(var(--vh) * 100)',
      }
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
