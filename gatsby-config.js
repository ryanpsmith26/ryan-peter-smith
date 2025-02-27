module.exports = {
    siteMetadata: {
        title: `Ryan P. Smith`,
        description: `Portfolio Site`,
        author: `Ryan P. Smith`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#333333`,
                theme_color: `#333333`,
                display: `minimal-ui`,
                icon: `src/images/logo/lightgray.png`,
            },
        },
        `gatsby-plugin-fontawesome-css`,
        `gatsby-plugin-smoothscroll`,
    ],
}
