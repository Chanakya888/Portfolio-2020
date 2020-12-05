import React from 'react';
import UIDesignLayout from '../layoutSections/UIDesignLayout';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
const JJNUI = () => {
	const query = useStaticQuery(graphql`
		query {
			image1: file(relativePath: { eq: "jjn-ui-1.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
			image2: file(relativePath: { eq: "jjn-ui-2.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<section id="UI-Design1JJN">
			<div>
				<UIDesignLayout uiDesignText="<p>Our design system helped us build a component-based design we think will work for long into the future. Once our initial wireframes were validated, we decided on a newspaper kind of look for the website, we had a lot of back and forth with the client to get the look and feel right. </p>" />
			</div>
			<div className="desktop-images-container">
				<div className="desktop-image-container">
					<Img fluid={query.image1.childImageSharp.fluid} alt="empty" objectFit="contain" className="desktop-image-height-and-width" />
				</div>
				<div className="desktop-image-container">
					<Img fluid={query.image2.childImageSharp.fluid} alt="empty" objectFit="contain" className="desktop-image-height-and-width" />
				</div>
			</div>
		</section>
	);
};

export default JJNUI;
