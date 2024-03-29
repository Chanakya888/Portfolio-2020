import React from 'react';

const SkillsSection = () => {
	const sub1 = 'Blockchain';
	const sub2 = 'Web';
	const sub3 = 'Media';
	const sub4 = 'Design';
	const title = 'My Skills';
	return (
		<section>
			<div className="section-below-cover">
				<h2>{title}</h2>

				<div className="content-and-section-gap-2">
					<div className="grid-wrapper">
						<div className="agency">
							<h5>{sub1}</h5>
							<ul>
								<li>Solidity</li>
								<li>Truffle</li>
								<li>Web3.js</li>
							</ul>
						</div>
						<div className="context-point role">
							<h5>{sub2}</h5>
							<ul>
								<li>TypeScript</li>
								<li>Gatsby JS</li>
								<li>React JS</li>
								<li>Graph QL</li>
							</ul>
						</div>
						<div className="context-point tools">
							<h5>{sub3}</h5>
							<ul>
								<li>Final Cut ProX</li>
								<li>Adobe After Effects</li>
								<li>Figma</li>
								<li>Adobe XD</li>
							</ul>
						</div>
						<div className="context-point missions">
							<h5>{sub4}</h5>
							<ul>
								<li>UX Research</li>
								<li>Wireframing</li>
								<li>Prototyping</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
