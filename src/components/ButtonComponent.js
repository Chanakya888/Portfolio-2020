import React from 'react';
import { gsap } from 'gsap';
const ButtonComponent = (props) => {
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
		<div
			style={{ width: 'max-content', display: 'inline-block' }}
			onMouseOver={() => {
				splitAnimation(`#${props.buttonId}`);
			}}
			onMouseOut={() => {
				resetAnimation(`#${props.buttonId}`);
			}}
		>
			<h4 id={`${props.buttonId}`}>{props.buttonName}</h4>
			<div className="horizontal-rule padding-between-hr-and-button" />
		</div>
	);
};

export default ButtonComponent;
