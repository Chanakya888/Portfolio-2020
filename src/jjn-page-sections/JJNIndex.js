import React, { useEffect } from 'react';
import Header from '../components/Header';
import JJNBackgroundSection from './JJNBackgroundSection';
import JJNIA from './JJNIA';
import JJNUI from './JJNUI';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ButtonComponent from '../components/ButtonComponent';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setTitleText, animateLines, buttonAnimation } from '../util-functions/componentAnimations';
import Footer from '../components/Footer';
const JJNIndex = () => {
	useEffect(() => {
		setTitleText('jjn-title-text');
		animateLines('jjn-title-text');
		buttonAnimation();
		setTitleText('jjn-end-title-text');
	}, []);
	const query = useStaticQuery(graphql`
		query {
			jjnImage: file(relativePath: { eq: "jjn-cover.png" }) {
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
			trigger: '#jjn-end-title-text',
			start: 'top 80%',
			onEnter: () => animateLines('jjn-end-title-text', 'no-delay'),
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
						<h1 style={{ marginTop: '5px' }} id="jjn-title-text">
							<span>case</span>
							<span>study of</span>
							<span>Just Jobs</span>
							<span>Network</span>
							<span>Org.</span>
						</h1>
						<div className="content-and-section-gap-2 ">
							{/* <h4 style={{ opacity: 0.5 }}>Currently under Development</h4> */}
							<ButtonComponent buttonName="Currently under Development" letterAnimation="no" />
						</div>
					</div>
				</div>
			</div>
			<div className="content-and-section-gap">
				<div className="cover-image-container">
					<Img fluid={query.jjnImage.childImageSharp.fluid} alt="jjn-cover" className="cover-image" />
				</div>
			</div>
			<div className="main-container main-container-add-bottom-padding">
				<div>
					{/* Section one */}
					<JJNBackgroundSection />
					{/* Section two */}
					<JJNIA />
					{/* Section three */}
					<JJNUI />
					<div className="section-gap" id="jjn-credits-container">
						<h1 style={{ marginTop: '5px' }} className="h1-width" id="jjn-end-title-text">
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

export default JJNIndex;
