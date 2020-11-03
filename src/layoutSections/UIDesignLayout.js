import React from 'react';

const UIDesignLayout = (props) => {
	return (
		<section className="section-gap">
			<h2>III. UI Design</h2>
			<div className="content-and-section-gap">
				<div dangerouslySetInnerHTML={{ __html: `${props.uiDesignText}` }} />
			</div>
		</section>
	);
};

export default UIDesignLayout;
