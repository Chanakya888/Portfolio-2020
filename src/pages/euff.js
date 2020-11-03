import React, { useRef, useEffect } from 'react';
import useWindowSize from '../util-functions/useWindowSize';
import EuffIndex from '../euff-page-sections/EuffIndex';
import PageNavigation from '../components/PageNavigation';

const Euff = () => {
	//Hook to grab window size
	const size = useWindowSize();

	// Ref for parent div and scrolling div
	const app = useRef();
	const scrollContainer = useRef();
	const pageNavigation = useRef();
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
			// pageNavigation.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

			//loop vai rafd
			requestAnimationFrame(() => skewScrolling());
		}
	};

	return (
		<div>
			<div ref={app} className="App">
				<div ref={scrollContainer} className="scroll">
					<div className="background">
						<div className="components-foreground">
							<EuffIndex datarounded={data.rounded} />
						</div>
					</div>
				</div>
				<PageNavigation section1="Background1Euff" section2="Solutions1Euff" section3="UI-Design1Euff" section4="Development1Euff" nextProject="/" />
			</div>
		</div>
	);
};

export default Euff;
