import React from 'react';
import Header from '../components/Header';
import ButtonComponent from '../components/ButtonComponent';
import CspBackgroundSection from './CspBackgroundSection';
import CspSolutionsection from './CspSolutionsection';
import CspUiSection from './CspUiSection';
import CspDevelopmentSection from './CspDevelopmentSection';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Footer from '../components/Footer';
const CspIndex = () => {
	const query = useStaticQuery(graphql`
		query {
			euffImages: file(relativePath: { eq: "csp-cover.png" }) {
				childImageSharp {
					fluid(maxWidth: 2000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<div>
			<div className="main-container main-container-add-top-padding">
				<div>
					<Header />
					<div className="h1-and-menu-space">
						<h1 style={{ marginTop: '5px' }}>
							<span>case</span>
							<span>study of</span>
							<span>Capital</span>
							<span>square</span>
							<span>partners</span>
							<span>singapore</span>
						</h1>
						<div className="content-and-section-gap ">
							<p>
								Capital Square Partners is a private equity fund manager based in Singapore. It primarily invests in buyouts and control investments in Southeast Asia and India, across multi-geography cross border businesses - with deep sector expertise and focus on technology, media
								and telecommunications, healthcare and business and consumer services sectors.{' '}
							</p>
						</div>
						<div className="content-and-section-gap-2 ">
							<ButtonComponent buttonName="Visit the website" />
						</div>
					</div>
				</div>
			</div>
			<div className="content-and-section-gap">
				<div className="cover-image-container">
					<Img fluid={query.euffImages.childImageSharp.fluid} alt="euff-cover" className="cover-image" />
				</div>
			</div>
			<div className="main-container  main-container-add-bottom-padding">
				<div>
					{/* Section one */}
					<CspBackgroundSection />
					{/* Section two */}
					<CspSolutionsection />
					{/* Section three */}
					<CspUiSection />
					{/* Section four */}
					<CspDevelopmentSection />
					<div className="section-gap">
						<h1 style={{ marginTop: '5px' }} className="h1-width">
							thanks to wishbox studio for their trust and thanks to you for reading!
						</h1>
					</div>
					<div className="content-and-section-gap-2">
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CspIndex;
