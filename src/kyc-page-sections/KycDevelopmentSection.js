import React from 'react';
import DummmyComponent from '../layoutSections/DummyComponent';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image'
const KycDevelopmentSection = () => {
	const query = useStaticQuery(graphql`
	query {
		image1: file(relativePath: { eq: "kyc-development-1.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
		image2: file(relativePath: { eq: "kyc-development-2.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`);
	return (
		<section id="Development1kyc">
			<div>
				<DummmyComponent
					dummyComponentTitle="III. Development"
					dummyComponentText="<p>React truffle box was used in this project, 
                it provides a boilerplate for the front end with react and solidity in the backend. Ganache server is used to provide an ethereum workspace allowing me test 
				my app without deploying on the ethreum mainnet.  </p>"
				/>
			</div>
			<div className="desktop-images-container">
				<div className="desktop-image-container">
					<Img fluid={query.image1.childImageSharp.fluid} alt="kyc-development-1" objectFit="contain" className="desktop-image-height-and-width" />
				</div>
				<div className="desktop-image-container">
					<Img fluid={query.image2.childImageSharp.fluid} alt="kyc-development-2" objectFit="contain" className="desktop-image-height-and-width" />
				</div>
			</div>
		</section>
	);
};

export default KycDevelopmentSection;
