import React, { useEffect } from 'react';
import { gsap, TimelineLite } from 'gsap';
import { Link } from 'gatsby';
// import { SplitText } from "../util-functions/SplitText"
import AniLink from 'gatsby-plugin-transition-link/AniLink';

function Header(props) {
	let delay = 0;
	if (props.delay === 'opening') {
		delay = 2;
	}
	useEffect(() => {
		let headerAnimation = new TimelineLite();
		headerAnimation.fromTo('#nav-horizontal-rule', { width: '0%' }, { delay: delay, width: '100%', duration: 1, ease: 'Power4.easeIn' });
	}, []);
	const splitAnimation = (target) => {
		gsap.to(target, {
			letterSpacing: '2px',
			duration: 0.25,
			ease: 'Power4.easeOut'
		});
	};
	const resetAnimation = (target) => {
		gsap.to(target, {
			letterSpacing: '0px',
			duration: 0.25,
			ease: 'Power4.easeOut'
		});
	};
	return (
		<div>
			<div className="header-inner-items-horizontal-flex">
				<Link cover to="/" direction="right" duration={2} bg="#d64b41">
					<button
						onMouseOver={() => {
							splitAnimation('#menu');
						}}
						onMouseOut={() => {
							resetAnimation('#menu');
						}}
						onFocus={() => {}}
						className="button-hover"
					>
						<h4 id="menu">Portfolio</h4>
					</button>
				</Link>
				<button
					onMouseOver={() => {
						splitAnimation('#contact');
					}}
					onMouseOut={() => {
						resetAnimation('#contact');
					}}
					className="button-hover"
				>
					<h4 id="contact">Contact</h4>
				</button>
			</div>
			<div className="horizontal-rule padding-between-headerline-and-menu-buttons" id="nav-horizontal-rule" />
		</div>
	);
}

export default Header;
