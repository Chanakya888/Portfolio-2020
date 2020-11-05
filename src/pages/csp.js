import React, { useRef, useEffect } from 'react';
import useWindowSize from '../util-functions/useWindowSize';
import CspIndex from '../csp-page-sections/CspIndex';
import PageNavigation from '../components/PageNavigation';
const CSP = () => {
	//Hook to grab window size
	const size = useWindowSize();

	// Ref for parent div and scrolling div
	const app = useRef();
	const scrollContainer = useRef();

	// Configs
	const data = {
		ease: 0.1,
		current: 0,
		previous: 0,
		rounded: 0
	};

	// Run scrollrender once page is loaded.
	useEffect(() => {
		requestAnimationFrame(() => skewScrolling());
	}, []);

	//set the height of the body.
	useEffect(
		() => {
			setBodyHeight();
		},
		[ size.height ]
	);

	//Set the height of the body to the height of the scrolling div
	const setBodyHeight = () => {
		document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
	};

	// Scrolling
	const skewScrolling = () => {
		if (scrollContainer.current !== null) {
			//Set Current to the scroll position amount
			data.current = window.scrollY;
			// Set Previous to the scroll previous position
			data.previous += (data.current - data.previous) * data.ease;
			// Set rounded to
			data.rounded = Math.round(data.previous * 100) / 100;

			// Difference between
			const difference = data.current - data.rounded;
			const acceleration = difference / size.width;
			const velocity = +acceleration;
			const skew = velocity * 7.5;

			//Assign skew and smooth scrolling to the scroll container
			scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

			//loop vai rafd
			requestAnimationFrame(() => skewScrolling());
		}
	};
	return (
		<div ref={app} className="App">
			<div ref={scrollContainer} className="scroll">
				<div className="background">
					<div className="components-foreground">
						<CspIndex />
					</div>
				</div>
			</div>
			<PageNavigation section1="Background1csp" section2="Solutions1csp" section3="UI-Design1csp" section4="Development1csp" nextProject="/euff/" />
		</div>
	);
};

export default CSP;
