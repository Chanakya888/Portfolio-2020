import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import { SplitText } from '../util-functions/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// component
const PageNavigation = (props) => {
	//id names
	const section1 = `${props.section1}`;
	const section2 = `${props.section2}`;
	const section3 = `${props.section3}`;
	const section4 = `${props.section4}`;
	const section5 = 'Next-Project';

	//text to be displayed
	const section1Name = section1.split('1');
	const section2Name = section2.split('1');
	const section3Name = section3.split('1');
	const section4Name = section4.split('1');

	//useRefs
	const section1Ref = useRef(null);
	const section2Ref = useRef(null);
	const section3Ref = useRef(null);
	const section4Ref = useRef(null);
	const section5Ref = useRef(null);

	//hiding arrrow for home page
	useEffect(() => {
		if (props.nextProject === 'none') {
			if (section5Ref.current !== null) {
				section5Ref.current.style.display = 'none';
			}
		}
	}, []);

	const moveToThisSection = (section) => {
		let distance = document.getElementById(section).getBoundingClientRect();
		window.scrollBy(0, distance.y - 75);
	};

	const sectionEnter = (section) => {
		if (section.current !== null) {
			section.current.classList.add('circle-full-opacity');
		}
	};
	const sectionLeave = (section) => {
		if (section.current !== null) {
			section.current.classList.remove('circle-full-opacity');
		}
	};

	const showTheText = (section) => {
		gsap.to(`.${section}-text-chars`, 0.4, { y: 0, stagger: 0.04, ease: 'Power4.easeOut' });
	};

	const hideTheText = (section) => {
		gsap.to(`.${section}-text-chars`, 0.4, { y: 60, stagger: 0.04, ease: 'Power4.easeIn' });
	};

	//scroll triggers, run after all the components are loaded
	useEffect(() => {
		ScrollTrigger.create({
			trigger: `#${section1}`,
			start: 'top 60%',
			end: 'bottom 60%',
			onEnter: () => sectionEnter(section1Ref),
			onLeave: () => sectionLeave(section1Ref),
			onEnterBack: () => sectionEnter(section1Ref),
			onLeaveBack: () => sectionLeave(section1Ref)
		});
		ScrollTrigger.create({
			trigger: `#${section2}`,
			start: 'top 60%',
			end: 'bottom 60%',
			onEnter: () => sectionEnter(section2Ref),
			onLeave: () => sectionLeave(section2Ref),
			onEnterBack: () => sectionEnter(section2Ref),
			onLeaveBack: () => sectionLeave(section2Ref)
		});
		ScrollTrigger.create({
			trigger: `#${section3}`,
			start: 'top 60%',
			end: 'bottom 60%',
			onEnter: () => sectionEnter(section3Ref),
			onLeave: () => sectionLeave(section3Ref),
			onEnterBack: () => sectionEnter(section3Ref),
			onLeaveBack: () => sectionLeave(section3Ref)
		});
		ScrollTrigger.create({
			trigger: `#${section4}`,
			start: 'top 60%',
			end: 'bottom 60%',
			onEnter: () => sectionEnter(section4Ref),
			onLeave: () => sectionLeave(section4Ref),
			onEnterBack: () => sectionEnter(section4Ref),
			onLeaveBack: () => sectionLeave(section4Ref)
		});
	}, []);

	//split chars
	useEffect(() => {
		new SplitText(`#${section1}-text`, { type: 'chars', charsClass: `${section1}-text-chars` });
		new SplitText(`#${section2}-text`, { type: 'chars', charsClass: `${section2}-text-chars` });
		new SplitText(`#${section3}-text`, { type: 'chars', charsClass: `${section3}-text-chars` });
		new SplitText(`#${section4}-text`, { type: 'chars', charsClass: `${section4}-text-chars` });
		new SplitText(`#${section5}-text`, { type: 'chars', charsClass: `${section5}-text-chars` });
		gsap.set([ `.${section1}-text-chars`, `.${section2}-text-chars`, `.${section3}-text-chars`, `.${section4}-text-chars`, `.${section5}-text-chars` ], { y: 60 });
	}, []);

	return (
		<div id="pageNavigation" className="page-navigation">
			<div className="circle-group">
				{/* Button one */}
				<div
					className="circle-button-wrapper"
					onClick={() => {
						moveToThisSection(section1);
					}}
					onMouseOver={() => showTheText(section1)}
					onMouseOut={() => hideTheText(section1)}
				>
					{/* <div className="circle-boundary"> */}
					<div className="circle" ref={section1Ref} id={`${section1}-circle`} />
					{/* </div> */}
					<div className="text-background">
						<p className="page-navigation-text" id={`${section1}-text`}>
							{section1Name[0]}
						</p>
					</div>
				</div>
				{/* Button two */}
				<div
					className="circle-button-wrapper"
					onClick={() => {
						moveToThisSection(section2);
					}}
					onMouseOver={() => showTheText(section2)}
					onMouseOut={() => hideTheText(section2)}
				>
					{/* <div className="circle-boundary"> */}
					<div className="circle" ref={section2Ref} id={`${section2}-circle`} />
					{/* </div> */}
					<div className="text-background">
						<p className="page-navigation-text" id={`${section2}-text`}>
							{section2Name[0]}{' '}
						</p>
					</div>
				</div>

				{/* Button three*/}
				<div
					className="circle-button-wrapper"
					onClick={() => {
						moveToThisSection(section3);
					}}
					onMouseOver={() => showTheText(section3)}
					onMouseOut={() => hideTheText(section3)}
				>
					{/* <div className="circle-boundary"> */}
					<div className="circle" ref={section3Ref} id={`${section3}-circle`} />
					{/* </div> */}
					<div className="text-background">
						<p className="page-navigation-text" id={`${section3}-text`}>
							{section3Name[0]}
						</p>
					</div>
				</div>

				{/* Button four */}
				<div
					className="circle-button-wrapper"
					onClick={() => {
						moveToThisSection(section4);
					}}
					onMouseOver={() => showTheText(section4)}
					onMouseOut={() => hideTheText(section4)}
				>
					{/* <div className="circle-boundary"> */}
					{/* </div> */}
					<div className="circle" ref={section4Ref} id={`${section4}-circle`} />
					<div className="text-background">
						<p className="page-navigation-text" id={`${section4}-text`}>
							{section4Name[0]}
						</p>
					</div>
				</div>
				{/* Button five */}
				<Link to={`${props.nextProject}`}>
					<div className="circle-button-wrapper" ref={section5Ref} onMouseOver={() => showTheText(section5)} onMouseOut={() => hideTheText(section5)}>
						<div className="svg-container" id="Next-Project-circle">
							<svg xmlns="http://www.w3.org/2000/svg" width="15.513" height="10.346" viewBox="0 0 15.513 10.346">
								<path
									id="Icon_ionic-ios-arrow-round-forward"
									data-name="Icon ionic-ios-arrow-round-forward"
									d="M17.768,11.45a.7.7,0,0,0-.005.991l3.276,3.282H8.57a.7.7,0,0,0,0,1.4H21.034l-3.276,3.282a.709.709,0,0,0,.005.991.7.7,0,0,0,.986-.005l4.44-4.472h0a.787.787,0,0,0,.145-.221.669.669,0,0,0,.054-.269.7.7,0,0,0-.2-.49l-4.44-4.472A.686.686,0,0,0,17.768,11.45Z"
									transform="translate(-7.875 -11.252)"
									fill="#d64b41"
								/>
							</svg>
						</div>
						<div className="text-background">
							<p className="page-navigation-text" id="Next-Project-text">
								Next Project
							</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default PageNavigation;
