import React, { useEffect } from 'react';
import renderNoise from '../util-functions/renderNoise';
import EuffIndex from '../euff-page-sections/EuffIndex';
import PageNavigation from '../components/PageNavigation';

const Euff = () => {
	useEffect(() => {
		renderNoise();
	}, []);

	return (
		<div>
			<canvas id="noise" className="noise" />
			<div className="components-foreground">
				<EuffIndex />
				<PageNavigation section1="Background1Euff" section2="Solutions1Euff" section3="UI-Design1Euff" section4="Development1Euff" nextProject="/" />
			</div>
		</div>
	);
};

export default Euff;
