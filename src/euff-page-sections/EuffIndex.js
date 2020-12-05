import React, { useEffect } from 'react';
import Header from '../components/Header';
import ButtonComponent from '../components/ButtonComponent';
import EuffBackgroundSection from './EuffBackgroundSection';
import EuffSolutionSection from './EuffSolutionSection';
import EuffUiDesignSection from './EuffUiDesignSection';
import EuffDevelopmentChoicesSection from './EuffDevelopmentChoicesSection';
import Footer from '../components/Footer';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setTitleText, animateLines, buttonAnimation } from '../util-functions/componentAnimations';
const EuffIndex = (props) => {
	useEffect(() => {
		setTitleText('euff-title-text');
		animateLines('euff-title-text');
		buttonAnimation();
		setTitleText('euff-end-title-text');
	}, []);

	const query = useStaticQuery(graphql`
		query {
			euffImages: file(relativePath: { eq: "euff-cover.png" }) {
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
			trigger: '#euff-end-title-text',
			start: 'top 80%',
			onEnter: () => animateLines('euff-end-title-text', 'no-delay'),
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
						<h1 style={{ marginTop: '5px' }} id="euff-title-text">
							<span>case</span>
							<span>study of</span>
							<span>European</span>
							<span>Union</span>
							<span>Festival</span>
							<span>Film India</span>
						</h1>
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
			<div className="main-container main-container-add-bottom-padding">
				<div>
					{/* Section one */}
					<EuffBackgroundSection />
					{/* Section two */}
					<EuffSolutionSection />
					{/* Section three */}
					<EuffUiDesignSection />
					{/* Section four */}
					<EuffDevelopmentChoicesSection />

					<div className="section-gap" id="euff-credits-container">
						<h1 style={{ marginTop: '5px' }} className="h1-width" id="euff-end-title-text">
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

export default EuffIndex;
