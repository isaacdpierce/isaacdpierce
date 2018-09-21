module.exports = {
  siteMetadata: {
    title: 'Isaac D. Pierce',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Fira Sans: 100,300,700',
            'Cormorant Garamond:300,700',
            'Droid Sans Condensed:300,700',
            'Droid Serif Condensed:300,700',
            'Handlee',
            'Allerta Stencil',
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
    },

    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
  ],
}
