import React from 'react';

const BackgroundLayout = (props) => {
	const sub1 = 'Agency';
	const sub2 = 'Role';
	const sub3 = 'Tools';
	const sub4 = 'Missions';
	const title = 'I. Background and the challenge';

	return (
		<div className="section-gap">
			<h2>{title}</h2>
			<div className="content-and-section-gap">
				<div dangerouslySetInnerHTML={{ __html: `${props.backgroundContent}` }} />
			</div>
			<div className="content-and-section-gap-2">
				<div className="grid-wrapper">
					<div className="agency">
						<h5>{sub1}</h5>
						<ul>
							<div dangerouslySetInnerHTML={{ __html: `${props.agency}` }} />
						</ul>
					</div>
					<div className="context-point role">
						<h5>{sub2}</h5>
						<ul>
							<div dangerouslySetInnerHTML={{ __html: `${props.roles}` }} />
						</ul>
					</div>
					<div className="context-point tools">
						<h5>{sub3}</h5>
						<ul>
							<div dangerouslySetInnerHTML={{ __html: `${props.tools}` }} />
						</ul>
					</div>
					<div className="context-point missions">
						<h5>{sub4}</h5>
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
