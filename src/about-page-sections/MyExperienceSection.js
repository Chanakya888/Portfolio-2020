import React from 'react';

const MyExperienceSection = () => {
	return (
		<div className="section-gap">
			<h2>My Experience</h2>
			<div className="content-and-section-gap-2">
				<div className="experience-grid-wrapper">
					<div className="">
						<h5>2018</h5>
						<ul>
							<li>Video Editor for TEDxBMU</li>
							<li>Designer for Tsundoku magazine</li>
						</ul>
					</div>

					<div className="context-point">
						<h5>2020</h5>
						<ul>
							<li>Organiser of IntraMUN 2020 at BMU</li>
							<li>Intern at Wishbox Studio (May - Sept)</li>
						</ul>
					</div>
					<div className="context-point">
						<h5>2019</h5>
						<ul>
							<li>Intern at Wishbox Studio (May - June)</li>
							<li>Part-time at wishbox studio (June - Sept)</li>
							<li>President at Club Sierra</li>
							<li>Co-organiser of TEDxBMU 2019</li>
						</ul>
					</div>
					<div className="context-point">
						<h5>2021</h5>
						<ul>
							<li>Internship at Interlay Ltd. (May - July)</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyExperienceSection;
