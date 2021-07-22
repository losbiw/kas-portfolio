module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['poppins', 'serif'],
    },
    extend: {
      borderRadius: {
        semi: '5vmax',
        huge: '20%',
      },
      width: {
        'page-80': '80vw',
      },
      height: {
        'width-page-80': '80vw',
      },
      keyframes: {
        open: {
          '0%': { bottom: '100vh' },
          '100%': { bottom: 0 },
        },
      },
      animation: {
        open: 'open 800ms linear forwards',
        close: 'open 800ms linear reverse forwards',
      },
      colors: {
        'dark-grey': '#1f1f1f',
      },
    },
  },
  variants: {
    extend: {
      fontSize: ['hover'],
      borderRadius: ['group-hover', 'hover'],
    },
  },
  plugins: [],
};
