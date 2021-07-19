module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['poppins', 'serif'],
    },
    extend: {
      borderRadius: {
        huge: '20%',
      },
    },
  },
  variants: {
    extend: {
      fontSize: ['hover'],
    },
  },
  plugins: [],
};
