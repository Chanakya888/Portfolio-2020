import React, { useEffect } from 'react';
import Header from '../components/Header';
import ButtonComponent from '../components/ButtonComponent';
import CspBackgroundSection from './CspBackgroundSection';
import CspSolutionsection from './CspSolutionsection';
import CspUiSection from './CspUiSection';
import CspDevelopmentSection from './CspDevelopmentSection';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Footer from '../components/Footer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setTitleText, animateLines, buttonAnimation } from '../util-functions/componentAnimations';
const CspIndex = () => {
	useEffect(() => {
		setTitleText('csp-title-text');
		animateLines('csp-title-text');
		buttonAnimation();
		setTitleText('csp-end-title-text');
	}, []);
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
	useEffect(() => {
		ScrollTrigger.create({
			trigger: '#csp-end-title-text',
			start: 'top 80%',
			onEnter: () => animateLines('csp-end-title-text', 'no-delay'),
			onLeave: () => {},
			onEnterBack: () => {},
			onLeaveBack: () => {}
		});
	}, []);
	return (
		<div>
			<div className="main-container main-container-add-top-padding">
				<div style={{ width: '100%' }}>
					<Header />
					<div className="h1-and-menu-space">
						<h1 style={{ marginTop: '5px' }} id="csp-title-text">
							<span>case</span>
							<span>study of</span>
							<span>Capital</span>
							<span>square</span>
							<span>partners</span>
							<span>singapore</span>
						</h1>

						<div className="content-and-section-gap-2">
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
						<div id="csp-credits-container">
							<h1 style={{ marginTop: '5px' }} className="h1-width " id="csp-end-title-text">
								thanks to wishbox studio for their trust and thanks to you for reading!
							</h1>
						</div>
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
