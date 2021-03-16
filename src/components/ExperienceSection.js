import React from 'react';
import the_fed from '../icons/logos/frbsfLogo.png';
import wells_fargo from '../icons/logos/wellsLogo.png';
import general_assembly from '../icons/logos/gaLogo.png';

const ExperienceSection = () => {
  return (
    <div className="subsection bottom_border" id="experience">
      <h3>Experience</h3>
      <div className = "experience-listing">
        <img src={general_assembly} alt="General Assembly" className="logo"/>
        <h5>General Assembly - [Software Engineering Immersive Teacher's Assistant]</h5>
        <p>I am currently working as a Teachers Assistant at General Assembly where support students in understanding computer programming fundamentals such as object oriented programming, data structures, and coding best practices.</p>
      </div>
      <div className = "experience-listing">
        <img src={the_fed} alt="Federal Reserve Bank Of San Francisco" className="logo"/>
        <h5>Federal Reserve Bank Of San Francisco - [Cash Clerk]</h5>
        <p>Worked at the Federal Reserve Bank Of San Francisco for 7 months, where I learned how to troubleshoot software and equipment. During my time there the team i was assigned to was in charge of proving currency to the population during a global pandemic. This was able to do, due to consistent communication that we had as a team and the hard work that each of us put in on a daily basis.</p>
      </div>
      <div className = "experience-listing">
        <img src={wells_fargo} alt="Wells Fargo" className="logo"/>
        <h5>Wells Fargo - [Operations Clerk]</h5>
        <p>Worked at Wells Fargo in the Cash Operations for 4 years. Where I learned how to work in a team, meet deadlines, troubleshoot problems and most importantly I learned how to communicate effectively to ensure all task were done. Being that it was my first official Job I took every opportunity given to me and used every experience as a lesson, which gave me an opportunity to move on to the Federal Reserve Bank.</p>
      </div>
    </div>
  );
}

export default ExperienceSection;
