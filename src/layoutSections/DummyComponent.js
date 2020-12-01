import React from 'react';

const DummmyComponent = (props) => {
	return (
		<section className="section-gap">
			<h2>{props.dummyComponentTitle}</h2>
			<div className="content-and-section-gap">
				<div dangerouslySetInnerHTML={{ __html: `${props.dummyComponentText}` }} />
			</div>
		</section>
	);
};

export default DummmyComponent;
