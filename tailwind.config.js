/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {

      boxShadow: {
        
        'dark1': '50px 50px 100px #303030, -50px -50px 100px #c0c0c0',
        'dark2': '11px 11px 22px #0f0f0f, -11px -11px 22px #3d3d3d',
        'dark3': '21px 21px 42px #0d0e12, -21px -21px 42px #333846',
      },
      fontFamily: {
        'Lato': ['Lato'],
        'Roboto': ['Roboto'],
        'Brice': ['Brice']
        
        
      }

    },
  },
  plugins: [],
}

