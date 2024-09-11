/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif']
      },
      keyframes: {
        "up-Down": {
            "0%": {
                transform: "translateY(0)"
            },
            "50%": {
                transform: "translateY(-15px)"
            },
            "100%": {
              transform: "translateY(0)"
            },
        },
        flips: { 
          "0%" :{
            transform: "rotateY(-180deg)"
          },
          "100%" :{
            transform: "rotateY(0deg)"
          },
        },
      },
      animation: {
        upDown: 'up-Down 1.5s linear infinite',
        flipy : 'flips 1s 1',
      },
      plugins: [],
    }
  }
}