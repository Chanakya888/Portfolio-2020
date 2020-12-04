import React from 'react';
import DevelopmentChoicesLayout from '../layoutSections/DevelopmentChoicesLayout';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
const CspDevelopmentSection = () => {
	const query = useStaticQuery(graphql`
		query {
			image1: file(relativePath: { eq: "csp-dev-1.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
			image2: file(relativePath: { eq: "csp-2.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<section id="Development1csp">
			<DevelopmentChoicesLayout developmentChoicesText="<p>Since we decided to build a proper design system, 
			we continued to do the same with the development too, we used Gatsby JS which is a framework based on React JS, we built all the atoms of the design system as components, built molecules and organisms on top of that.</p><p>There are a couple of reasons why we chose Gatsby instead of plain old React, the first one is Server-side rendering, this allowed the client to make any changes on the CMS, the site builds and simply serves it like a regular website with html, css and js, no more waiting for responses from the backend and long image loading times. The second reason and my personal favorite feature of Gatsby is its image sharp plugin, it does not just load images based on the size of the client’s screen but also loads a blurry picture at the start and improves the quality once other components on the website load. We used contentful cms with gatsby as it provides default optimization techniques and integrates well with Gatsby. All of this meant, a super-fast scalable website with a robust cms.</p>" />
			<div className="desktop-images-container">
				<div className="desktop-image-container">
					<Img fluid={query.image1.childImageSharp.fluid} alt="csp-dev-1" objectFit="contain" className="desktop-image-height-and-width" />
				</div>
				<div className="desktop-image-container">
					<Img fluid={query.image2.childImageSharp.fluid} alt="csp-dev-2" objectFit="contain" className="desktop-image-height-and-width" />
				</div>
			</div>
		</section>
	);
};

export default CspDevelopmentSection;
