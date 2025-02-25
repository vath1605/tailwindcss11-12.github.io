/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html","./dist/*.html"],
  theme: {
    extend: {
      fontFamily:{
        myfont : [
          "Sigmar", "serif"
        ]
      },
      backgroundImage:{
        trans:[
          "linear-gradient(90deg, rgba(0,0,0,0.321187850140056) 0%, rgba(255,255,255,0.5480786064425771) 0%, rgba(0,0,0,0.4008797268907564) 86%)"
        ],
        hov:[
          "linear-gradient(90deg, rgba(159,159,159,0.30438112745098034) 0%, rgba(159,159,159,0.3) 100%)"
        ]
      },
      backgroundColor:{
        dark:[
          "rgb(40,45,53)"
        ],
        ggray:[
          "rgb(84,93,102)"
        ]
      },
      height:{
        div:[
          "635px"
        ],
        sec1:[
          "15%"
        ],
        sec2:[
          "40%"
        ],
        sec3:[
          "45%"
        ]
      },
    },
  },
  plugins: [],
}

