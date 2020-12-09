import React, { useEffect } from 'react';
import Header from '../components/Header';
import ButtonComponent from '../components/ButtonComponent';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Footer from '../components/Footer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setTitleText, animateLines, buttonAnimation } from '../util-functions/componentAnimations';
import KycBackgroundSection from './KycBackgroundSection';
import KycIdeaSection from './KycIdeaSection';
import KycDevelopmentSection from './KycDevelopmentSection';
const CspIndex = () => {
	useEffect(() => {
		setTitleText('kyc-title-text');
		animateLines('kyc-title-text');
		buttonAnimation();
		setTitleText('kyc-end-title-text');
	}, []);
	const query = useStaticQuery(graphql`
		query {
			image1: file(relativePath: { eq: "kyc-cover.jpg" }) {
				childImageSharp {
					fluid(maxHeight: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	useEffect(() => {
		ScrollTrigger.create({
			trigger: '#kyc-end-title-text',
			start: 'top 80%',
			onEnter: () => animateLines('kyc-end-title-text', 'no-delay'),
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
						<h1 style={{ marginTop: '5px' }} id="kyc-title-text">
							<span>case</span>
							<span>study of</span>
							<span>Know</span>
							<span>Your</span>
							<span>Customer</span>
							<span>Blockchain</span>
						</h1>

						<div className="content-and-section-gap-2">
							<a href="https://capital-square-partners-testing-v1.netlify.app/" target="_blank">
								<ButtonComponent buttonName="Github Repo" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="content-and-section-gap">
				<div className="cover-image-container kyc-image-cover"> <Img fluid={query.image1.childImageSharp.fluid} alt="kyc-cover" className="cover-image" /> </div>
			</div>
			<div className="main-container  main-container-add-bottom-padding">
				<div>
					{/* Section one */}
					<KycBackgroundSection />
					{/* Section two */}
					<KycIdeaSection />
					{/* Section three */}
					<KycDevelopmentSection />
					{/* Section four */}
					<div className="section-gap">
						<div id="kyc-credits-container">
							<h1 style={{ marginTop: '5px' }} className="h1-width " id="kyc-end-title-text">
								Eth to <span>the moon!</span> Thankyou for<span>reading!</span>
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
