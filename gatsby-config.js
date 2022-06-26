
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
        name: `Youcef's portfolio website`,
        short_name: `Youcef`,
        start_url: `/`,
        background_color: `#21212F`,
        theme_color: `#21212F`,
        display: `standalone`,
        icon: 'src/images/myIcon.png'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `root`,
        path: `${__dirname}/src/fakeRoot/`,
      },
    },
  ],
  pathPrefix: "/me",
};