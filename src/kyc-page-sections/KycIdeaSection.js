import React from 'react';
import DummmyComponent from '../layoutSections/DummyComponent';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
const KycIdeaSection = () => {
	const query = useStaticQuery(graphql`
		query {
			image1: file(relativePath: { eq: "kyc-idea-1.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
			image2: file(relativePath: { eq: "kyc-idea-2.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<section id="Idea1kyc">
			<div>
				<DummmyComponent
					dummyComponentTitle="II. Idea and design"
					dummyComponentText="<p>This project aims to provide a comprehensive verification solution for both customers and companies, wherein customers have to upload their KYC details only once and the details will be saved on the blockchain, third party organisations or any banks can request the KYC of a customer, the customer can then accept or reject the request of sharing the details to a third party organisation. </p>"
				/>
				<div className="desktop-images-container">
				<div className="desktop-image-container">
					<Img fluid={query.image1.childImageSharp.fluid} alt="kyc-idea-1" objectFit="contain" className="desktop-image-height-and-width" />
				</div>
				<div className="desktop-image-container">
					<Img fluid={query.image2.childImageSharp.fluid} alt="kyc-idea-2" objectFit="contain" className="desktop-image-height-and-width" />
				</div>
			</div>
			</div>
		</section>
	);
};

export default KycIdeaSection;
