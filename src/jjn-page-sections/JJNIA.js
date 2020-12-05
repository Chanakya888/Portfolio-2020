import React from 'react';
import DummmyComponent from '../layoutSections/DummyComponent';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const JJNIA = () => {
	const query = useStaticQuery(graphql`
		query {
			image1: file(relativePath: { eq: "jjn-ia-1.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
			image2: file(relativePath: { eq: "jjn-ia-2.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<section id="IA1JJN">
			<DummmyComponent
				dummyComponentTitle="II. Information Architecture"
				dummyComponentText="<p>Our primary research was focused on understanding the diverse content models which represent the current posts and the ones that might constitute the future posts. From our research, we devised the content model categorisation into 3categories, Case studies, Research Models, and Insights model (which talks about Explainers and Analysis) into Category1, which will be used as primary navigation. </p>
                <p>Category2 segregates posts on the length. Less than 1000 word posts can be used as quick opinions of other researchers opinion on a story like Universal Basic Income. From 1000 to 2000 words is reserved for longer explanations that are aimed at more serious readers. And above 2000 words category which is an extensive research projects category that can go on for months. We also formed a new content model, stories, which are focused on breaking down the posts that are above 2000words into smaller posts, all of these posts might have a different thumbnail but are connected to posts of the same family and display a primary thumbnail of the original post.</p>
                <p>Categorisation3 is focused on tags, every post can have several tags that link to the individual page of tags which displays all the posts that contain the tag. We also made sure that the design allows JJN to add more tags in the future. </p>"
			/>

			<div className="desktop-images-container">
				<div className="desktop-image-container">
					<Img fluid={query.image1.childImageSharp.fluid} alt="empty" objectFit="contain" className="desktop-image-height-and-width" />
				</div>
				<div className="desktop-image-container">
					<Img fluid={query.image2.childImageSharp.fluid} alt="empty" objectFit="contain" className="desktop-image-height-and-width" />
				</div>
			</div>
		</section>
	);
};

export default JJNIA;
