module.exports = {
  siteMetadata: {
    title: "Veterinaria Gatsby ",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "0da1e98c6d5b60e5c1d694b1befbeb",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    `gatsby-plugin-react-helmet`,{
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
        }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'Veterianria-Gatsby',
        short_name: 'Veterinaria',
        start_url: '/',
        background_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    
  ],
};
