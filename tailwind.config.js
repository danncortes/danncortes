module.exports = {
  content: ['./src/**/*.{html,tsx,js}'],
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' }
        // => @media  print { ... }
      }
    }
  }
};
