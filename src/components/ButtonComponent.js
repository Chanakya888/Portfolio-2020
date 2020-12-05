import React, { useEffect } from 'react';
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
			onFocus={() => {}}
			role="button"
		>
			<div className="button-text-container">
				<h4 className="button-text" id={`${props.buttonId}`}>
					{props.buttonName}
				</h4>
			</div>
			<div className="horizontal-rule padding-between-hr-and-button" id="button-horizontal-rule" />
		</div>
	);
};

export default ButtonComponent;
