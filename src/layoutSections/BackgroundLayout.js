import React from 'react';

const BackgroundLayout = (props) => {
	return (
		<div className="section-gap">
			<h2>I. Background and the challenge</h2>
			<div className="content-and-section-gap">
				<div dangerouslySetInnerHTML={{ __html: `${props.backgroundContent}` }} />
			</div>
			<div className="content-and-section-gap-2">
				<div className="grid-wrapper">
					<div className="agency">
						<h5>Agency</h5>
						<ul>
							<li>{props.agency}</li>
						</ul>
					</div>
					<div className="context-point role">
						<h5>Role</h5>
						<ul>
							<div dangerouslySetInnerHTML={{ __html: `${props.roles}` }} />
						</ul>
					</div>
					<div className="context-point tools">
						<h5>Tools</h5>
						<ul>
							<div dangerouslySetInnerHTML={{ __html: `${props.tools}` }} />
						</ul>
					</div>
					<div className="context-point missions">
						<h5>Missions</h5>
						<ul>
							<div dangerouslySetInnerHTML={{ __html: `${props.missions}` }} />
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BackgroundLayout;
