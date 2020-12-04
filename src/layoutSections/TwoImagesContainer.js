import React from 'react';
import Img from 'gatsby-image';
import gsap from 'gsap';
const TwoImagesContainer = (props) => {
	const animateShadow = (target) => {
		console.log('animating shadow', target);
		gsap.to(target, 0.75, { delay: 0.5, ease: 'Power3.easeOut', y: -40 });
	};
	return (
		<div className="two-images-container">
			<div className="image-container-1" id={`${props.image1Id}`}>
				<Img
					fluid={props.image1}
					alt={`${props.image1Id}`}
					objectFit="contain"
					className="mobile-image-height-and-width"
					onLoad={() => {
						animateShadow(`#${props.image1Id}`);
					}}
				/>
			</div>
			<div className="image-container-2" id={`${props.image2Id}`}>
				<Img
					fluid={props.image2}
					alt={`${props.image1Id}`}
					objectFit="contain"
					className="mobile-image-height-and-width"
					onLoad={() => {
						animateShadow(`#${props.image2Id}`);
					}}
				/>
			</div>
		</div>
	);
};

export default TwoImagesContainer;
