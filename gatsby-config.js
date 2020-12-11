/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: `Chanakya Kilaru's Portfolio`,
		description: `Portfolio`,
		author: `Chanakya Kilaru`,
	  },
	/* Your site config here */
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`
			}
		},
		`gatsby-plugin-transition-link`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`
	]
};
