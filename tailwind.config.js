module.exports = {
  content: ['./content/**/*.md', './content/**/*.html', './layouts/**/*.html'],
  theme: {
    extend: {
      keyframes: {
        'scale-in': {
          '0%': {
            transform: 'scale(0.95)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
      },
      animation: {
        'scale-2': 'scale-in 2s ease-out',
        'scale-1': 'scale-in 1.2s ease-out',
        'scale-0.5': 'scale-in 0.8s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
