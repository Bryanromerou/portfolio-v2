import React from 'react';
import Project from './Project';
import image1_1 from '../project_images/project1/1.png';
import image1_2 from '../project_images/project1/2.png';
import image1_3 from '../project_images/project1/3.png';
import image2_1 from '../project_images/project2/1.png';
import image2_2 from '../project_images/project2/2.png';
import image2_3 from '../project_images/project2/3.png';
import image3_1 from '../project_images/project3/1.png';
import image3_2 from '../project_images/project3/2.png';
import image3_3 from '../project_images/project3/3.png';


const Projects = (props) => {
  return (
    <section ref={props.reference} className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <Project 
        name="Thought Provoking Questions"
        description = {["Thought Provoking Questions is an full stack application that welcome those who have questions that there are no solid answers to. Users are able to add, delete, and edit Questions along the ability to engage with other Users by replying to their questions.","This application was built using the React.js in the front-end and Node.js, MongoDB, and Express.js in the back-end. Authentication was implemented using Bcrypt and passed through the front-end via JWT(Json Web Token). Then the user was tracked throughout the site by storing the user information in a global state using React Redux. Additionally I incorporated the Youtube API to show the user videos relevant to their questions. "]}
        github = "https://github.com/Bryanromerou/thought-provoking-questions"
        live_link = "https://sleepy-mesa-13114.herokuapp.com/"
        images = {[image1_1,image1_2,image1_3]}
        inverse = {true}
        stack = {["Node.js","React","Express","JavaScript","MongoDB","Heroku","Bcrypt","Authentication","JWT","HTML","CSS","Youtube API"]}
        />
      <Project 
        name="DRYFT"
        description = {["DRYFT is a travel blogging and social media site dedicated to those who are always on the move. Where one could share pictures of places that they have visited and engage with others.","DRYFT was a project done in collaboration with 3 other General Assembly graduates. This application was built using python’s framework, Django, and PostgreSQL for the database. I played an important role in creating full CRUD functionality with the user’s information and in implementing the Google Map’s API."]}
        github = "https://github.com/jedgodsey/dryft"
        // live_link = "https://dryft.herokuapp.com/"
        images = {[image2_1,image2_2,image2_3]}
        stack = {["Python","Django","PostgreSQL","JavaScript","Authentication","CSS","HTML","Google Maps API"]}
        />
      <Project 
        name="Anatomy-is-Awesome"
        description = {["Anatomy is Awesome! is a note taking app that is catered to students that are currently attending Anatomy courses. To start just create a profile and adding your name. When creating a user a body will appear just with bones. Pick one of the 4 Major Body Sections (Head, Arms, Legs, and Torso). Once picking on the body section select the muscle to add on to the body. Once the muscle is on the body the user will be able to make notes about that muscle and save it to the database so that others could see their notes. The goal is the completely fill the Skeleton and to take notes worthy of saving."]}
        github = "https://github.com/Bryanromerou/anatomy-is-awesome"
        live_link = "https://floating-escarpment-82475.herokuapp.com/"
        images = {[image3_1,image3_2,image3_3]}
        inverse = {true}
        stack = {["Node.js","Express","JavaScript","MongoDB","Heroku","HTML","CSS","TinyMCE API"]}
      />
    </section>
  );
}

export default Projects;
