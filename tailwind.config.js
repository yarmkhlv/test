/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./../public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      bgLogo: '#5A5A5A',
      bgDefaultBtn: '#E75626',
      bgHoverBtn: '#BE3B10',
      bgDisabledBtn: 'rgba(231, 86, 38, 0.5)',
    }),
    borderColor: (theme) => ({
      borLogo: '#C7C7C7',
    }),
  },
  plugins: [],
};
