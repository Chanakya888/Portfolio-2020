import React, { useEffect } from 'react';
import { gsap, TimelineLite } from 'gsap';
// import { SplitText } from "../util-functions/SplitText"

function Header(props) {
	useEffect(() => {
		let headerAnimation = new TimelineLite();

		headerAnimation.fromTo('.horizontal-rule', { width: '0%' }, { width: '100%', duration: 1, ease: 'Power4.easeIn' });
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
				<button
					onMouseOver={() => {
						splitAnimation('#menu');
					}}
					onMouseOut={() => {
						resetAnimation('#menu');
					}}
					className="button-hover"
				>
					<h4 id="menu">Menu</h4>
				</button>

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
			<div className="horizontal-rule padding-between-headerline-and-menu-buttons" />
		</div>
	);
}

export default Header;
