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
      custom_xss: ['14px', '18px'],
      custom_xs: ['16px', '120%'],
      custom_s: ['18px', '120%'],
      custom_m: ['24px', '120%'],
      custom_l: ['28px', '120%'],
      custom_xl: ['32px', '120%'],
      custom_xll: ['36px', '120%'],
      custom_xlll: ['120px', '120%'],
    }),
    borderRadius: (theme) => ({
      custom_Rad: '30px',
    }),
  },
  plugins: [],
};
