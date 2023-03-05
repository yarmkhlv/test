/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./../public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: (theme) => ({
      AvenirNextCyr: ['Avenir Next Cyr', 'sans-serif'],
    }),
    backgroundColor: (theme) => ({
      bgLogo: '#5A5A5A',
      bgDefaultBtn: '#E75626',
      bgHoverBtn: '#BE3B10',
      bgDisabledBtn: 'rgba(231, 86, 38, 0.5)',
    }),
    borderColor: (theme) => ({
      borLogo: '#C7C7C7',
    }),
    textColor: (theme) => ({
      colorAccent: '#E75626',
    }),
    fontSize: (theme) => ({
      custom_xss: ['0.7777rem', '128.5%'],
      custom_xs: ['1rem', '120%'],
      custom_s: ['1.125rem', '120%'],
      custom_m: ['1.5rem', '120%'],
      custom_l: ['1.75rem', '120%'],
      custom_xl: ['2rem', '120%'],
      custom_xll: ['2.25rem', '120%'],
      custom_xll_plus: ['3rem', '120%'],
      custom_xlll: ['7.5rem', '120%'],
    }),
    borderRadius: (theme) => ({
      custom_Rad: '30px',
    }),
  },
  plugins: [],
};
