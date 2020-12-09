import React from 'react';
import BackgroundLayout from '../layoutSections/BackgroundLayout';

const KycBackgroundSection = () => {
	return (
		<section id="Background1kyc">
			<div>
				<BackgroundLayout
					backgroundContent="<p>
        This project was a part of my blockchain course, the idea behind this project was to provide third party organisations with a verified KYC of users stored on the blockchain. In India, where every app that is remotely closed to banking is required to have a KYC, a user using multiple banking apps has to submit
         multiple KYCs to the apps and each app has to verify the KYC using the government's chargeable API. 
							</p>"
					agency="<li>Course Work</li>"
					roles="<li>UI/UX Designer</li><li>Developer</li>"
					missions="<li>UI Design</li><li>Development</li>"
					tools="<li>Truffle</li><li>React JS</li><li>Solidity</li><li>Ganache</li>"
				/>
			</div>
		</section>
	);
};

export default KycBackgroundSection;
