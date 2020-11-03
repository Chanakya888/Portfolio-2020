import React from 'react';
import Header from '../components/Header';
import ButtonComponent from '../components/ButtonComponent';
import EuffBackgroundSection from './EuffBackgroundSection';
import EuffSolutionSection from './EuffSolutionSection';
import EuffUiDesignSection from './EuffUiDesignSection';
import EuffDevelopmentChoicesSection from './EuffDevelopmentChoicesSection';
import Footer from '../components/Footer';
const EuffIndex = (props) => {
	console.log(props.datarounded);
	// const pageNavigation = useRef();

	// useEffect(() => {
	// 	requestAnimationFrame(() => movePageNavigation());
	// }, []);
	// const movePageNavigation = () => {
	// 	if (pageNavigation !== null) {
	// 		pageNavigation.current.style.transform = `translate3d(0, -${props.datarounded}px, 0)`;
	// 		requestAnimationFrame(() => movePageNavigation());
	// 	}
	// };

	return (
		<div className="main-container">
			<div>
				<Header />
				<div className="h1-and-menu-space">
					<h1 style={{ marginTop: '5px' }}>
						<span>case</span>
						<span>study of</span>
						<span>European</span>
						<span>Union</span>
						<span>Festival</span>
						<span>Film India</span>
					</h1>
					<div className="content-and-section-gap">
						<p>
							The European Union Film Festival is an annual event celebrating the vitality and diversity of European cinema and culture. This year, the Festival will mark its 24th edition and travel to nine cities across India bringing to audiences 23 films exploring unique stories,
							experiences, and histories from across the continent.
						</p>
					</div>
					<div className="content-and-section-gap-2 ">
						<ButtonComponent buttonName="Visit the website" />
					</div>
				</div>
				{/* Section one */}
				<EuffBackgroundSection />
				{/* Section two */}
				<EuffSolutionSection />
				{/* Section three */}
				<EuffUiDesignSection />
				{/* Section four */}
				<EuffDevelopmentChoicesSection />

				<div className="section-gap">
					<h1 style={{ marginTop: '5px' }} className="h1-width">
						thanks to wishbox studio for their trust and thanks to you for reading!{' '}
					</h1>
				</div>
				<div className="content-and-section-gap-2">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default EuffIndex;
