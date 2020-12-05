import React, { useEffect } from 'react';
import renderNoise from '../util-functions/renderNoise';
import PageNavigation from '../components/PageNavigation';
import JJNIndex from '../jjn-page-sections/JJNIndex';
const JJN = () => {
	useEffect(() => {
		renderNoise();
	}, []);
	return (
		<div>
			<canvas id="noise" className="noise" />
			<div className="components-foreground">
				<JJNIndex />
				<PageNavigation section1="Background1JJN" section2="IA1JJN" section3="UI-Design1JJN" section4="none" nextProject="/euff" creditsId="jjn-credits-container" />
			</div>
		</div>
	);
};

export default JJN;
