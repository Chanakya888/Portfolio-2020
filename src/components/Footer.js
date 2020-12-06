import React from 'react';
import { gsap } from 'gsap';
const Footer = () => {
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
			<div className="horizontal-rule padding-between-footerline-and-menu-buttons" />
			<div className="header-inner-items-horizontal-flex">
				<h4 style={{ width: '50%' }}>Chanakya Kilaru</h4>
				<a href="mailto: samuraichanakya1@gmail.com">
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
				</a>
			</div>
		</div>
	);
};

export default Footer;
