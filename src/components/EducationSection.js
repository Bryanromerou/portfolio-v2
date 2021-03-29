import React from 'react';
import dominguez_hills from '../icons/logos/dh.png';
import elac from '../icons/logos/elacLogo.png';
import general_assembly from '../icons/logos/gaLogo.png';


const EducationSection = () => {
  return (
    <div className="subsection left_border" id="education">
      <p className="subsection-title">Education</p>
      <div className = "education-listing">
        <img src={general_assembly} alt="General Assembly" className="logo"/>
        <p className="listing-title">General Assembly</p>
        <p>Attended a Software Engineering Immersive Program, where I completed over 420 hours of training. This training included: learning how to create backend API, creating a full stack application, and using frameworks/libraries. In this program we were made to work in groups so we had to use tools as Github and Trello to comunicate and get Projects turned in.</p>
      </div>
      <div className = "education-listing">
        <img src={dominguez_hills} alt="California State University of Dominguez Hills" className="logo"/>
        <p className="listing-title">California State University of Dominguez Hills</p>
        <p>Currently Attending CSUDH and am 1 year away from graduating with a Bachelor's in Computer Science. Where I passed classes such as "Data Structures" and "Computer Ethics".</p>
      </div>
      <div className = "education-listing">
        <img src={elac} alt="East Los Angeles Community College" className="logo"/>
        <p className="listing-title">East Los Angeles Community College</p>
        <p>Attended East Los Angeles Community College, for 3 years where I completed my General Education Requirements which encompasses many basic skills such as English. Also took some more Intermediate classes such as Physics, Calculus I/II, and Discrete Mathematics</p>
      </div>
    </div>
  );
}

export default EducationSection;
