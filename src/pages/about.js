import React, { useEffect } from 'react';
import renderNoise from '../util-functions/renderNoise';
import '../styles/reset.css';
import '../styles/global.css';
import '../styles/App.css';
import Aboutindex from '../about-page-sections/Aboutindex';

const About = () => {
	useEffect(() => {
		renderNoise();
	}, []);
	return (
		<div>
			<canvas id="noise" className="noise" />
			<div className="components-foreground">
				<Aboutindex />
				{/* <PageNavigation section1="Background1csp" section2="Solutions1csp" section3="UI-Design1csp" section4="Development1csp" nextProject="/euff/" /> */}
			</div>
		</div>
	);
};

export default About;
