import React from 'react';
import Header from '../components/Header';
import ButtonComponent from '../components/ButtonComponent';
import CspBackgroundSection from './CspBackgroundSection';
import CspSolutionsection from './CspSolutionsection';
import CspUiSection from './CspUiSection';
import CspDevelopmentSection from './CspDevelopmentSection';
const CspIndex = () => {
	return (
		<div className="main-container">
			<div>
				<Header />
				<div className="h1-and-menu-space">
					<h1 style={{ marginTop: '5px' }}>
						<span>case</span>
						<span>study of</span>
						<span>Capital</span>
						<span>square</span>
						<span>partners</span>
						<span>singapore</span>
					</h1>
					<div className="content-and-section-gap ">
						<p>
							Capital Square Partners is a private equity fund manager based in Singapore. It primarily invests in buyouts and control investments in Southeast Asia and India, across multi-geography cross border businesses - with deep sector expertise and focus on technology, media and
							telecommunications, healthcare and business and consumer services sectors.{' '}
						</p>
					</div>
					<div className="content-and-section-gap-2 ">
						<ButtonComponent buttonName="Visit the website" />
					</div>
				</div>
				{/* Section one */}
				<CspBackgroundSection />
				{/* Section two */}
				<CspSolutionsection />
				{/* Section three */}
				<CspUiSection />
				{/* Section four */}
				<CspDevelopmentSection />
			</div>
		</div>
	);
};

export default CspIndex;
