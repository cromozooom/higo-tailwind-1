module.exports = {
  content: [
    "./**/content/**/*.md", "./**/content/**/*.html", "./**/layouts/**/*.html"
  ],

  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
}