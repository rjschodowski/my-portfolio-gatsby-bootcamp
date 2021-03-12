module.exports = {
  
  siteMetadata: {
    title: 'R.J. Schodowski',
    author: 'R.J. Schodowski'
  },
  plugins: [
    'gatsby-plugin-sass', 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ],
}
