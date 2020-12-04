import React from 'react';
import UIDesignLayout from '../layoutSections/UIDesignLayout';
import { graphql, useStaticQuery } from 'gatsby';
import TwoImagesContainer from '../layoutSections/TwoImagesContainer';
const EuffUiDesignSection = () => {
	const query = useStaticQuery(graphql`
		query {
			image1: file(relativePath: { eq: "euff-UI-1.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
			image2: file(relativePath: { eq: "euff-UI-2.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<section id="UI-Design1Euff">
			<div>
				<UIDesignLayout uiDesignText="<p>The graphic character of the website is derived from the print media of EUFF designed by the amazing graphic designers at wishbox. The design of the print media was already validated by the client, I’ve picked up some fun elements from the print and added them to the website such as the play button and forward button.</p>" />
			</div>
			<TwoImagesContainer image1={query.image1.childImageSharp.fluid} image1Id="euff-wire-1" image2={query.image2.childImageSharp.fluid} image2Id="euff-wire-2" />
		</section>
	);
};

export default EuffUiDesignSection;
