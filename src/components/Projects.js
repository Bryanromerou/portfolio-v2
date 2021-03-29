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
import Carousel from './Carousel';


const Projects = (props) => {
  return (
    <section ref={props.reference} className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <Project 
        name="Thought Provoking Questions"
        description = {["Thought Provoking Questions is an app that welcome those who have questions that there are no solid answers to. Users are able to add, delete, and edit Questions and reply to other's questions.","This full stack application was built with React.js in the front end and a RESTful Api in the backend with MongoDB and Node. It also contains authentication and uses redux to keep the users information in the global state"]}
        github = "https://sleepy-mesa-13114.herokuapp.com/"
        live_link = "https://github.com/Bryanromerou/thought-provoking-questions"
        images = {[image1_1,image1_2,image1_3]}
        inverse = {true}
        stack = {["Node.js","React","Express","JavaScript","MongoDB","Heroku","Bcrypt","Authentication","JWT","HTML","CSS","Youtube API"]}
        />
      <Project 
        name="DRYFT"
        description = {["DRYFT is a travel blogging and social site dedicated to those who are always on the move. To signup, users must enter their relevant profile info, as well as select the city in the world they happen to be in at the moment. Optionally, they can also include a profile picture of themselves. Within the app, the user will be able to find and post about any city in the world as well as comment on the posts other users have made."]}
        github = "https://github.com/jedgodsey/dryft"
        live_link = "https://dryft.herokuapp.com/"
        images = {[image2_1,image2_2,image2_3]}
        stack = {["Python","Django","PostgreSQL","JavaScript","Heroku","Authentication","CSS","HTML","Google Maps API"]}
        />
      <Project 
        name="Anatomy-is-Awesome"
        description = {["Anatomy is Awesome! is a note taking app that is catered to students that are currently attending Anatomy courses. To start just create a profile and adding your name. When creating a user a body will appear just with bones. Pick one of the 4 Major Body Sections (Head, Arms, Legs, and Torso). Once picking on the body section select the muscle to add on to the body. Once the muscle is on the body the user will be able to make notes about that muscle and save it to the database so that others could see their notes. The goal is the completely fill the Skeleton and to take notes worthy of saving."]}
        github = "https://github.com/Bryanromerou/anatomy-is-awesome"
        live_link = "https://floating-escarpment-82475.herokuapp.com/"
        images = {[image3_1,image3_2,image3_3]}
        inverse = {true}
        stack = {["Node.js","Express","JavaScript","MongoDB","Heroku","HTML","CSS"]}
      />
    </section>
  );
}

export default Projects;
