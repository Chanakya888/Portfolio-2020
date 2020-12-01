import React from 'react';
import Header from '../components/Header';
import JJNBackgroundSection from './JJNBackgroundSection';
import JJNIA from './JJNIA';
import JJNUI from './JJNUI';

const JJNIndex = () => {
	return (
		<div className="main-container">
			<div>
				<Header />
				<div className="h1-and-menu-space">
					<h1 style={{ marginTop: '5px' }}>
						<span>case</span>
						<span>study of</span>
						<span>Just Jobs</span>
						<span>Network</span>
						<span>Org.</span>
					</h1>
					<div className="content-and-section-gap ">
						<p>
							JustJobs Network is a private, nonpartisan organization finding evidence-based solutions to one of the most pressing challenges of our time: How to create more and better jobs worldwide. JustJobs convenes a global network of diverse stakeholders—including policy shapers,
							academics, and grassroots leaders — to deepen the practical implications of our research endeavors and amplify their impact.{' '}
						</p>
					</div>
					<div className="content-and-section-gap-2 ">
						<h4 style={{ opacity: 0.5 }}>Currently under Development</h4>
						{/* <ButtonComponent buttonName="Currently under Devc" /> */}
					</div>
				</div>
				{/* Section one */}
				<JJNBackgroundSection />
				{/* Section two */}
				<JJNIA />
				{/* Section three */}
				<JJNUI />
			</div>
		</div>
	);
};

export default JJNIndex;
