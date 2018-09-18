module.exports = {
  siteMetadata: {
    title: 'Isaac D. Pierce',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: '@raygesualdo/gatsby-plugin-babel-styled-components',
      options: {
        ssr: true,
        preprocess: true,
        minify: false,
        transpileTemplateLiterals: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `fira sans:100,300, 400,500,600`,
          `source sans pro:400,700`,
          'cormorant garamond:400,700',
        ],
      },
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
