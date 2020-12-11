import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const ButtonComponent = (props) => {
	let letterSpacing = '2px';
	if (props.letterAnimation === 'no') {
		letterSpacing = '0px';
	}
	useEffect(() => {
		if (props.letterAnimation === 'no') {
			document.getElementById('button-horizontal-rule').style.display = 'none';
			document.getElementById(`${props.buttonId}`).style.opacity = '0.5';
		}
	}, []);
	const splitAnimation = (target) => {
		gsap.to(target, {
			letterSpacing: letterSpacing,
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
			onBlur={()=>{}}
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
