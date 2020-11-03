import React from 'react';
import SolutionLayout from '../layoutSections/SolutionLayout';

const EuffSolutionSection = () => {
	return (
		<section id="Solutions1Euff">
			<div>
				<SolutionLayout solutionText="<p>Showcasing the best films from across Europe is the main aim of this 
festival, with this aim in mind, I’ve designed a dedicated films page 
which showcases all the films with their thumbnail. A user can visit the 
individual film page which shows detailed information about each film, 
this includes a brief description about the film and its makers and 
trailer of the film.</p>
<p>The schedule page was the trickiest in terms of UX because we had to 
ensure that the user isn’t overburdened with lots of information. I 
organised into three levels, the topmost level or simply the first level is 
the city, EUFF was planned to happen in 8 cities, level two consists of 
multiple locations in the city, level three displays the schedule for each 
location on a given day.  When a user visits the schedule page for a 
city, the landing page of each city shows multiple locations along with 
the date of each location, this outright helps a user to quickly compare 
with his calendar with showtimes and plan his day accordingly. There is 
also a handy little download schedule button in the landing section.</p>
<p>Right after the landing section, the schedule page displays the event 
schedule in the increasing order of timestamp along with the location 
of the event. There is brief information about each film, which takes to 
individual film page which has detailed information about the film.</p>" />
			</div>
		</section>
	);
};

export default EuffSolutionSection;
