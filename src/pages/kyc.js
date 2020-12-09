import React, { useEffect } from 'react';
import PageNavigation from '../components/PageNavigation';
import KycIndex from '../kyc-page-sections/KycIndex';
import renderNoise from '../util-functions/renderNoise';
const KYC = () => {
	useEffect(() => {
		renderNoise();
	}, []);
	return (
		<div>
			<canvas id="noise" className="noise" />
			<div className="components-foreground">
				<KycIndex />
				<PageNavigation section1="Background1kyc" section2="Idea1kyc" section3="Development1kyc" section4="none" nextProject="/csp/" creditsId="kyc-credits-container" />
			</div>
		</div>
	);
};

export default KYC;
