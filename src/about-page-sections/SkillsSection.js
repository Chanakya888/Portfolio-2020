import React from 'react';
import BackgroundLayout from '../layoutSections/BackgroundLayout';

const SkillsSection = () => {
	const sub1 = 'Blockchain';
	const sub2 = 'Web';
	const sub3 = 'Media';
	const sub4 = 'Languages';
	const title = 'My Skills';
	return (
		<div className="section-gap">
			<h2>{title}</h2>

			<div className="content-and-section-gap-2">
				<div className="grid-wrapper">
					<div className="agency">
						<h5>{sub1}</h5>
						<ul>
							<li>Truffle</li>
							<li>Remix</li>
							<li>Hyperledger</li>
						</ul>
					</div>
					<div className="context-point role">
						<h5>{sub2}</h5>
						<ul>
							<li>Gatsby JS</li>
							<li>React JS</li>
							<li>Node JS</li>
							<li>Graph QL</li>
						</ul>
					</div>
					<div className="context-point tools">
						<h5>{sub3}</h5>
						<ul>
							<li>Final Cut Pro X</li>
							<li>Adobe After Effects</li>
							<li>Adobe Photoshop</li>
							<li>Adobe XD</li>
						</ul>
					</div>
					<div className="context-point missions">
						<h5>{sub4}</h5>
						<ul>
							<li>Solidity</li>
							<li>Javascript</li>
							<li>Python</li>
							<li>Java</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;
