/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./**/*.html', './**/*.js', './**/*.ejs'],
  theme: {
    extend: {
      backgroundImage:{
        'dogpark': "url('/src/images/dogbg.jpg')"
      }
    }
  },
  plugins: [],
}

