import React from 'react';
import BackgroundLayout from '../layoutSections/BackgroundLayout';

const CspBackgroundSection = () => {
	return (
		<section id="Background1csp">
			<BackgroundLayout
				backgroundContent="<p>I worked with wishbox studio as a UI/UX designer and full-stack 
developer in the summer of 2020. This time, I got an opportunity to 
work with Capital Square Partners, they previously had a website that 
was built using square space website builder. The team at CSP wasn’t 
satisfied with the outcome from square space builder, they contacted 
wishbox studio for a complete redesign of the website which 
showcases CSP as not another investment company but as a brand of 
investment.</p><p>The goal of the project is to redesign and develop the website of CSP 
showcasing CSP as an investment brand. The client desired a CMS 
which allows them to edit any content on the website, including 
updating or deleting team members and investments. </p>"
				agency="Wishbox studio"
				roles="<li>UI/UX Designer</li><li>Developer</li>"
				missions="<li>Wireframing</li><li>UI Design</li><li>Development</li>"
				tools="<li>AdobeXD</li><li>Gatsby JS</li><li>Graph QL</li><li>Contentful CMS</li>"
			/>
		</section>
	);
};

export default CspBackgroundSection;
