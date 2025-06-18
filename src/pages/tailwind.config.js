module.exports = {
extend: {
    animation: {
      'scroll-x': 'scrollX 40s linear infinite',
      'scroll-reverse': 'scrollReverse 40s linear infinite',
    },
    keyframes: {
      scrollX: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
      scrollReverse: {
        '0%': { transform: 'translateX(-50%)' },
        '100%': { transform: 'translateX(0)' },
      },
    },
  }
}
  
  