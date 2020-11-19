import React, { useEffect } from 'react';
import renderNoise from '../util-functions/renderNoise';
import '../styles/reset.css';
import '../styles/global.css';
import '../styles/App.css';
import IndexSection from '../home-page-sections/IndexSection';
import PageNavigation from '../components/PageNavigation';

export default function Home() {
	useEffect(() => {
		renderNoise();
	}, []);
	return (
		<div>
			<canvas id="noise" className="noise" />
			<div className="components-foreground">
				<IndexSection />
				<PageNavigation section1="Hey1home" section2="Projects1home" section3="About1home" section4="Status1home" nextProject="none" />
			</div>
		</div>
	);
}
