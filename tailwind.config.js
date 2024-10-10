/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        '8.75rem': ['8.75rem', '1.1'],
        '9rem': ['9rem', '1.1'],
      },
      colors:{
        'rich-black':'#00031B',
        'black-1':'#010000',
        'prussian-blue':'#082F49',
      },
    },
  },
  plugins: [],
}

