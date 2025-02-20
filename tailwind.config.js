/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html","./dist/*.html"],
  theme: {
    extend: {
      fontFamily:{
        myfont : [
          "Sigmar", "serif"
        ]
      }
    },
  },
  plugins: [],
}

