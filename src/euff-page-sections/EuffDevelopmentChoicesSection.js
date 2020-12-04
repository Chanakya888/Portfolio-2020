import React from 'react';
import DevelopmentChoicesLayout from '../layoutSections/DevelopmentChoicesLayout';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
const EuffDevelopmentChoicesSection = () => {
	const query = useStaticQuery(graphql`
		query {
			image1: file(relativePath: { eq: "euff-dev-1.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<section id="Development1Euff">
			<div>
				<DevelopmentChoicesLayout developmentChoicesText="<p>We’ve chosen webflow as our development platform, we’ve chosen this as it allows the client, organisers of the EUFF to quickly delete any element on the website. Webflow also has a pretty good CMS baked right into the development platform allowing the client to change or delete any content related to films quickly.</p>" />
			</div>
			<div className="desktop-images-container">
				<div className="desktop-image-container">
					<Img fluid={query.image1.childImageSharp.fluid} alt="empty" objectFit="contain" className="desktop-image-height-and-width" />
				</div>
			</div>
		</section>
	);
};

export default EuffDevelopmentChoicesSection;
