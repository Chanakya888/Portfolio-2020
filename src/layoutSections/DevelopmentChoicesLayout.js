import React from 'react';

const DevelopmentChoicesLayout = (props) => {
	return (
		<section className="section-gap">
			<h2>IV. Development Choices</h2>
			<div className="content-and-section-gap">
				<div dangerouslySetInnerHTML={{ __html: `${props.developmentChoicesText}` }} />
			</div>
		</section>
	);
};

export default DevelopmentChoicesLayout;
