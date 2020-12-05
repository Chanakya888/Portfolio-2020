import React from 'react';
import Header from '../components/Header';
import MyStorySection from './MyStorySection';
import MyExperienceSection from './MyExperienceSection';
import SkillsSection from './SkillsSection';
import Footer from '../components/Footer';

const Aboutindex = () => {
	return (
		<div className="main-container main-container-add-top-padding main-container-add-bottom-padding">
			<div>
				<Header />
				<div className="h1-and-menu-space">
					<h1 style={{ marginTop: '5px' }}>
						<span>intro</span>
						<span>of</span>
						<span>yourself</span>
						<span>square</span>
						<span>partners</span>
						<span>singapore</span>
					</h1>
				</div>
				{/* Section one  */}
				<SkillsSection />
				{/* Section two */}
				<MyExperienceSection />
				{/* Section three */}
				<MyStorySection />
				{/* Section four */}
				<section id="Status1home">
					<div className="section-gap">
						<h1 style={{ marginTop: '5px' }} className="h1-width">
							I'm actively looking for a 6month internship starting january 2021
						</h1>
					</div>
				</section>
				<div className="content-and-section-gap-2">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Aboutindex;
