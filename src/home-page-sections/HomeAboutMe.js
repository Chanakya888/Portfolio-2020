import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import { Link } from 'gatsby';
const HomeAboutMe = () => {
	return (
		<section id="About1home">
			<h2>About me</h2>
			<div className="content-and-section-gap">
				<p>
					I am currently in my 4th year of computer science engineering, I have always been interested in technologies to solve emerging issues in my surroundings, one such technology that showcases a lot of potential to me is blockchain technology, and this is what I plan to continue
					exploring and pursue in greater depths upon my graduation.
				</p>
				<p className="p-padding-top">
					Coming from a computer science background, I was exposed to understanding and applying complex algorithms. Designing and developing web apps for the past couple of years which focus on user interaction and experience, I believe these experiences will help me make better user
					experience choices in an emerging field like blockchain.
				</p>
				<div className="content-and-section-gap-2 ">
					<Link to="/about">
						<ButtonComponent buttonName="Know more" buttonId="know" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HomeAboutMe;
