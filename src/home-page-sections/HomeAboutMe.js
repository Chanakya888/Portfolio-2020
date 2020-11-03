import React from 'react';
import ButtonComponent from '../components/ButtonComponent';

const HomeAboutMe = () => {
	return (
		<div>
			<h2>About me</h2>
			<div className="content-and-section-gap">
				<p>I have always been interested in human centred design to solve emerging issues in my surroundings and this is what I would want to continue exploring and pursue in greater depths upon my graduation.</p>
				<p className="p-padding-top">
					I believe being from a computer science background, I was exposed to understanding complex algorithms and applying them. This exposure makes my design be reasonable and creative. Being able to understand design principles, my development can be more clear and delightful.
				</p>
				<div className="content-and-section-gap-2 ">
					<ButtonComponent buttonName="Know more" />
				</div>
			</div>
		</div>
	);
};

export default HomeAboutMe;
