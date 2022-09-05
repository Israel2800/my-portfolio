import React from 'react';
import project0 from '../../assets/projects/movie-moods.png';
import project1 from '../../assets/projects/record-swap.png';
import project2 from '../../assets/projects/weather-dash.png';
import project3 from '../../assets/projects/pwa.png';
import project4 from '../../assets/projects/note-taker.png';



export default function Projects() {
  return (
    <div>
      <h1 className='projectsSection'>Projects</h1>
      <div className='container'>
        <div className='projectImg0 hover'>
        <a href="https://israel2800.github.io/Team-Project-1/">
          <img src={project0} className="profilePhoto0" style={{ width:"350px", height:"200px" }} alt="project-1" />
          <div className='description'>
            <h3 className='job-name'>Movie Mood</h3>
            <h4 className='skills'>Web tools, API's and design!</h4>
          </div>
        </a>  
        </div>
        <div className='projectImg1 hover'>
        <a href="https://gentle-stream-19606.herokuapp.com/">  
          <img src={project1} className="profilePhoto0" style={{ width:"350px", height:"200px" }} alt="project-2"/>
          <div className='description'>
            <h3 className='job-name'>Record Swap</h3>
            <h4 className='skills'>Full Stack website!</h4>
          </div>
        </a>
        </div>
        <div className='projectImg2 hover'>
        <a href="https://israel2800.github.io/weather-dashboard-challenge/">
          <img src={project2} className="profilePhoto0" style={{ width:"350px", height:"200px" }} alt="project-3" />
          <div className='description'>
            <h3 className='job-name'>Weather Dashboard</h3>
            <h4 className='skills'>CSS, HTML and JS!</h4>
          </div>
        </a>  
        </div>
        <div className='projectImg3 hover'>
        <a href="https://budget-tracker-pwa-12.herokuapp.com/">  
          <img src={project3} className="profilePhoto0" style={{ width:"350px", height:"200px" }} alt="project-4" />
          <div className='description'>
            <h3 className='job-name'>Budget-Tracker-PWA</h3>
            <h4 className='skills'>PWA application!</h4>
          </div>
        </a>
        </div>  
        <div className='projectImg4 hover'>
        <a href="https://note-taker-task.herokuapp.com/">
          <img src={project4} className="profilePhoto0" style={{ width:"350px", height:"200px" }} alt="project-5" />
          <div className='description'>
            <h3 className='job-name'>Note Taker App</h3>
            <h4 className='skills'>Express.js, Node.js, JavaScript, HTML and CSS!</h4>
          </div>
        </a>
        </div>
      </div>
    </div>
  );
}
