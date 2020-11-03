import React from 'react';

const SolutionLayout = (props) => {
	return (
		<section className="section-gap">
			<h2>II. Solution and wireframes</h2>
			<div className="content-and-section-gap">
				<div dangerouslySetInnerHTML={{ __html: `${props.solutionText}` }} />
			</div>
		</section>
	);
};

export default SolutionLayout;
