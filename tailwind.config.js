/* eslint-disable @typescript-eslint/no-require-imports */
// @ts-check
/** @type {import("tailwindcss").Config } */
module.exports = {
  theme: {
    extend: {
      colors: {
        light: {
          bg: {
            primary: '#FFF5F7', // Very light pink
            secondary: '#FFF0F5', // Even lighter pink for gradient
            accent: '#FCE7F3', // Light pink accent color for certain elements
          },
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('--color-primary-500'),
              '&:hover': {
                color: theme('--color-primary-600'),
              },
              code: { color: theme('--color-primary-400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('--tracking-tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('--color-indigo-500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('--color-pink-500'),
              '&:hover': {
                color: theme('--color-primary-400'),
              },
              code: { color: theme('--color-primary-400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('--color-gray-100'),
            },
          },
        },
      }),
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
