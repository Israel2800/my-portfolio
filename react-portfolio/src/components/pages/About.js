import React from 'react';
import profilePhoto from '../../assets/profileImg/profile.jpeg';

export default function About() {
  return (
    <section className="who-am-i">
      <h1 id="about">Who am I?</h1>
      <img src={profilePhoto} className="profilePhoto" style={{ width:"250px", height:"300px" }} alt="cover" />
      <div className='name'>
        This is me!, ISRAEL AGUILAR
      </div>
      <div className="my-2">
        <p className='intro'>
        Adaptable Computer Science student, currently attending College of Accounting and Administration - UNAM, 
        with 1+ years of work experience. Aiming to leverage a proven knowledge of web design, programming, and 
        web platform development skills to successfully fill the Web Developer role. I am currently studing 
        a Coding BootCamp, learning and adopting some computer skills just like JavaScript, CSS and HTML, etc.
        </p>
      </div>
      
    </section>
  );
}
