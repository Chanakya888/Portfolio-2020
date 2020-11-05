import React from 'react';
import '../styles/home.css';
import Header from '../components/Header';
import FeaturedProjects from '../home-page-sections/FeaturedProjects';
import HomeAboutMe from '../home-page-sections/HomeAboutMe';
import Footer from '../components/Footer';
function Home() {
	return (
		<div className="main-container">
			<div>
				<Header />
				<section id="Hey1home">
					<div className="h1-and-menu-space">
						<h1 style={{ marginTop: '5px' }} className="h1-width">
							hey I'm Chanakya. <span>I love</span> building things web and blockchain. Glad to see you here!
						</h1>
					</div>
				</section>
				<div className="section-gap">
					<FeaturedProjects />
				</div>
				<div className="section-gap">
					<HomeAboutMe />
				</div>
				<section id="Status1home">
					<div className="section-gap">
						<h1 style={{ marginTop: '5px' }} className="h1-width">
							I'm actively looking for a 6month internship starting january 2021
						</h1>
					</div>
				</section>
				<div className="content-and-section-gap-2">
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Home;
