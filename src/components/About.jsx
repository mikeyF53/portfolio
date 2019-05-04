import React from 'react';
import ruby from '../img/Rubyicon.png';
import express from '../img/express1.png';
import rails from '../img/railsb.png';
import propic from '../img/mikeheadshot.jpg';

const About = props => {
  const { about } = props;

  return (
    <div ref={about} className='about'>
      <div className='pic-box'>
        <img className='propic' src={propic} alt='pro pic' />
      </div>
      <p className='bio'>
        As a former United States Marine, and a current full-stack developer,
        I’m constantly looking for ways to help people in their everyday lives.
        My military background has trained me to be diligent and perceptive to
        my surroundings and my work. In my freetime I love to binge watch comedy
        and sci-fi shows. I have a strong belief in “if you can think it, then
        you can make it.”
      </p>
      <h4>Skills</h4>
      <div className='icon-container'>
        <div className='icon-box'>
          <i className='html' class='fab fa-html5 fa-3x' />
        </div>
        <div className='icon-box'>
          <i className='css' class='fab fa-css3-alt fa-3x' />
        </div>
        <div className='icon-box'>
          <i className='javascript' class='fab fa-js fa-3x' />
        </div>
        <div className='icon-box'>
          <img className='express' className='icons' src={express} />
        </div>
        <div className='icon-box'>
          <img className='ruby' className='icons' src={ruby} />
        </div>
        <div className='icon-box'>
          <img className='rails' className='icons' src={rails} />
        </div>
        <div className='icon-box'>
          <i className='react' class='fab fa-react fa-3x' />
        </div>
        <div className='icon-box'>
          <i className='git' class='fab fa-github-square fa-3x' />
        </div>
      </div>
    </div>
  );
};

export default About;
