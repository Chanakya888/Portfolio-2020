import React, { useEffect } from 'react';
import CspIndex from '../csp-page-sections/CspIndex';
import renderNoise from '../util-functions/renderNoise';
import PageNavigation from '../components/PageNavigation';
const CSP = () => {
	useEffect(() => {
		renderNoise();
	}, []);
	return (
		<div>
			<canvas id="noise" className="noise" />
			<div className="components-foreground">
				<CspIndex />
				<PageNavigation section1="Background1csp" section2="Solutions1csp" section3="UI-Design1csp" section4="Development1csp" nextProject="/euff/" creditsId="csp-credits-container" />
			</div>
		</div>
	);
};

export default CSP;
