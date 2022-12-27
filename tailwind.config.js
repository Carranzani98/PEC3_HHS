/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'yellow-150': '#f4f47d',
        'gray-250': '#d3d4d5',
        'gray-350': '#d2d2d2',
        'gray-caption': '#6c757d',
        'gray-table':'#b3b3b3',
        'blue-link': '#0dcaf0',
      },
      width: {
        'card': '300px'
      },
      minWidth: {
        'sm': '360px'
      },
      maxWidth: {
        'card-img': '200px'
      },
      minHeight: {
        'news-img': '300px'
      },
      maxHeight: {
        'card-img': '200px'
      },
      fontSize: {
        'h1': 'calc(2rem + 1.5vw)',
        'h2': 'calc(1.325rem + .9vw)',
        'h3': 'calc(1.3rem + .6vw)'
      }
    },
  },
  plugins: [
    plugin(function({addBase, addUtilities, theme}){
      addBase({
        'h1': {
          fontSize: theme('fontSize.h1'),
        },
        'h2': {
          fontSize: theme('fontSize.h2'),
        },
        'h3': {
          fontSize: theme('fontSize.h3'),
        },
        'p': {
          marginBottom: theme('spacing.4'),
        },
        'caption': {
          fontSize: 'calc(1.3rem + .6vw)'
        },
        'th': {
          padding: '7px',
          fontSize: '13px'
        },
        'td': {
          padding: '10px 10px 10px 7px',
        }
      })
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '2px #000'
        },
        '.list-special-style': {
          'text-align': 'center',
          'content': 'counter(orderedlist)',
          'counter-increment': 'orderedlist',
          'border': '3px solid #f4f47d',
          'border-radius': '50%',
          'margin-right': '8px',
          'padding': '5px 10px',
          'line-height': '4'
        },
        '.counter-reset': {
          'counter-reset': 'orderedlist'
        }

      })
    })
  ],
}
