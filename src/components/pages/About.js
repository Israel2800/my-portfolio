import React from 'react';
import profilePhoto from '../../assets/profileImg/profileImg.jpg';

export default function About({ handlePageChange }) {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Israel!
            <br className="lg:inline-block" />I am a web developer!
          </h1>
          <p className="mb-8 leading-relaxed">
          This is my passion!
          My experience with software development started when I was in middle school, 
          but I have always loved computing since I can remember, that is why I am 
          constantly learning about new technologies to apply them and go from imagination 
          to reality using my programming skills. I recently earned a certificate as a Full 
          Stack Web Developer at Vanderbilt University and I have a certificate as a Software 
          Developer that I acquired in Mexico at The Vocational Number 9, Juan de Dios Batiz. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg"
              onClick={() => handlePageChange('Contact')}>
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              onClick={() => handlePageChange('Projects')}>
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src={profilePhoto}
            style={{width:"550px", height:"600px"}}
          />
        </div>
      </div>
    </section>
  );
}
