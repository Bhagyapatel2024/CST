import React from 'react';
import './Developer.css';  // Import the CSS file here
import DeveloperImage from './../images/bhagya.jpg'; // Import your image here

const Developer = () => {
  return (
    <div className="developer-container">
      {/* Developer Profile Section */}
      <section className="developer-profile">
        {/* 3D Profile Image */}
        <div className="profile-image">
          <img
            src={DeveloperImage}
            alt="Developer"
            className="image"
          />
        </div>
        <h1 className="developer-name">Bhagya Nitinkumar Patel</h1>
        <p className="developer-role">Full Stack Developer | AI/ML Enthusiast</p>
      </section>

      {/* About Developer Section */}
      <section className="about-developer">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I am an enthusiastic Computer Science Engineering student with a strong foundation in programming languages like Java and Python. I have hands-on experience in web development technologies such as React.js to build real-time applications. My background in machine learning includes developing predictive models using frameworks like scikit-learn and TensorFlow. Additionally, I have solved over 500 problems on LeetCode. I also secured an All India Rank of 553 in the National Level Science Talent Search Examination.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3 className="project-title">SummarizeX</h3>
            <p className="project-description">A web application built with React.js for summarizing articles with URLs.</p>
            <a href="https://summarizex-bhagya-patel.vercel.app/" className="project-link">Live Demo</a>
          </div>
          <div className="project-card">
            <h3 className="project-title">Nexgen Invoice Extractor</h3>
            <p className="project-description">Extract Information from Invoice</p>
            <a href="https://drive.google.com/file/d/1n1BbXYtQpHB8pwZs-OzZt_-DMSj2Joue/view" className="project-link">Live Demo</a>
          </div>
          <div className="project-card">
            <h3 className="project-title">ConnectPlus</h3>
            <p className="project-description">A web application built with React.js, Firebase.</p>
            <a href="https://connectpulse-bhagya-patel.vercel.app/" className="project-link">Live Demo</a>
          </div>
          <div className="project-card">
            <h3 className="project-title">OS Simulator</h3>
            <p className="project-description">A web application for Operating System algorithms.</p>
            <a href="https://os-bhagya-patel.vercel.app/" className="project-link">Live Demo</a>
          </div>
          <div className="project-card">
            <h3 className="project-title">Portfolio</h3>
            <a href="#" className="project-link">Live Demo</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Developer;
