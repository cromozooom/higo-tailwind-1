module.exports = {
  content: ['./**/content/**/*.md', './**/content/**/*.html', './**/layouts/**/*.html'],

  theme: {
    extend: {
      colors: {
        sea: {
          50: '#f6fafb',
          100: '#E9F4F5',
          200: '#D3E8EB',
          300: '#A7D1D6',
          400: '#3997A3',
          500: '#238B99',
          600: '#1F7D89',
          700: '#1C6F7A',
          800: '#18616B',
          900: '#15535C',
        },
        peach: {
          50: '#f6fafb',
          100: '#FCF0EE',
          200: '#F9DFDD',
          300: '#F3C0BB',
          400: '#E57165',
          500: '#E26154',
          600: '#CB574B',
          700: '#B54E43',
          800: '#9E443B',
          900: '#883A32',
        },
        ocean: {
          50: '#f6fafb',
          100: '#EAEDF0',
          200: '#D5DBDF',
          300: '#AAB7C0',
          400: '#415C71',
          500: '#2B4A61',
          600: '#274257',
          700: '#223B4E',
          800: '#1E3444',
          900: '#1A2C3A',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
