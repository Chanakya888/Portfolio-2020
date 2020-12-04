import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import TwoImagesContainer from '../layoutSections/TwoImagesContainer';
const CspUiSection = () => {
	const query = useStaticQuery(graphql`
		query {
			image1: file(relativePath: { eq: "csp-UI-1.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
			image2: file(relativePath: { eq: "csp-1.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<section id="UI-Design1csp" className="section-gap">
			<h2>III. Ui design</h2>
			<div className="content-and-section-gap">
				<p>
					We decided to have a classy and delightful vibe with the entire graphical character of the website showing CSP as a professional and mature brand. We followed the atomic design methodology for the design and development of the website. We designed individual atoms such as form
					inputs, buttons, h1s, and many such atoms, with the help of these simple group of atoms, we built elements such as form elements, these elements joined together we built organisms such as sections and forms. This methodology helped us build a cohesive and consistent website which
					is ready to be scaled in the future.{' '}
				</p>
			</div>

			<TwoImagesContainer image1={query.image1.childImageSharp.fluid} image1Id="csp-UI-1" image2={query.image2.childImageSharp.fluid} image2Id="csp-UI-2" />
		</section>
	);
};

export default CspUiSection;
