module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontSize: {
          'xs': '.75rem',
          'sm': '.875rem',
          'tiny': '.875rem',
          'base': '1rem',
          'lg': '1.125rem',
          'xl': '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '4rem',
          '7xl': '5rem',
        },
        fontWeight: {
          thin: 300,
          regular: 400,
          medium: 500,
          bold: 700
        },
        colors: {
          primary: '#222F4B',
          primaryBlue: '#1E2F4D',
          secondaryBlue: '#569FD6',
          darkBlue: '#222f4b',
          cyan: '#00C5E6',
          gris: '#F2F2F2',
          darkGris: '#808080',
          textGris: '#4d4d4d',
          backGris: '#b9bdbf',
          productsGris: '#f6f6f7'
        },
        backgroundImage: {
          'products-cta-video': "url('../../images/productos/back-cta-productos@2x-100.jpg)",
          'footer-texture': "url('/img/footer-texture.png')",
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
}