import React from 'react';

const Footer = () => {
  return (
    <footer className="contact-me">
        <h3>Contact Me</h3>
        <ul>
          <li className="contact-link">
            <a href="https://www.linkedin.com/in/bryanuromero/">LinkedIn <i className="fab fa-linkedin"/></a>
          </li>
          <li className="contact-link">
            <a href="https://github.com/bryanromerou">Github <i className="fab fa-github-square"/></a>
          </li>
          <li className="contact-link">
            <a href="mailto: Bryanromerou@gmail.com">Email <i className="fas fa-envelope-open-text"/></a>
          </li>
        </ul>
    </footer>
  );
}

export default Footer;
