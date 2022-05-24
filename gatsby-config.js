
module.exports = {
  siteMetadata: {
    title: "portfolio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#21212F`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/images/myIcon.png'
      },
    },
  ],
  pathPrefix: "/me",
};