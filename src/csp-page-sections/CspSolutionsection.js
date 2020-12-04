import React from 'react';
import SolutionLayout from '../layoutSections/SolutionLayout';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
const CspSolutionsection = () => {
	const query = useStaticQuery(graphql`
		query {
			image1: file(relativePath: { eq: "csp-wire-1.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
			image2: file(relativePath: { eq: "csp-wire-2.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<section id="Solutions1csp">
			<SolutionLayout solutionText="<p>Keeping in mind that CSP is an investment company, we started with designing the Information Architecture which clearly defines the structure along with the type of content that is going on the website. We decided on three top-level sections besides the introduction on the landing section, the first section is the investment portfolio of CSP, which reflects their risk tolerance and financial goals. Second is the awards and accolades section which showcases CSP’s achievements since they started. The final section shows the amazing team at CSP.
</p><p>Providing detailed information about investments in the portfolio is important, we directed each investment to another page from investments section which talks about the investment and the news related to the investment in detail. It’s the same case with each team member which directs to a detailed page of each one of them talking about their experience and educational background.</p>" />
			<div className="desktop-images-container">
				<div className="desktop-image-container">
					<Img fluid={query.image1.childImageSharp.fluid} alt="csp-wire-1" objectFit="contain" className="desktop-image-height-and-width" />
				</div>
				<div className="desktop-image-container">
					<Img fluid={query.image2.childImageSharp.fluid} alt="csp-wire-2" objectFit="contain" className="desktop-image-height-and-width" />
				</div>
			</div>
		</section>
	);
};

export default CspSolutionsection;
