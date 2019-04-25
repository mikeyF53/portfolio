import React from 'react';
import ruby from '../img/Rubyicon.png';
import express from '../img/express.png';
import rails from '../img/rails.png';
import propic from '../img/propic.jpg';

const About = () => {
  return (
    <div>
      <img className='propic' src={propic} alt='pro pic' />
      <p>
        As a former United States Marine, and a new web developer, I’m always
        looking for ways to help people in their everyday lives. My military
        background has trained me to be diligent and perceptive to my work and
        surroundings. I am a dog lover, and a comedy, sci-fi binge watcher. I
        have a strong belief in “if you can think it, then you can make it.”
      </p>
<div className='icon-container'>
      <div className='icon-box'>
        HTML5 <i class='fab fa-html5 fa-3x' />
      </div>
      <div className='icon-box'>
        CSS <i class='fab fa-css3-alt fa-3x' />
      </div>
      <div className='icon-box'>
        JAVASCRIPT <i class='fab fa-js fa-3x' />
      </div>
      <div className='icon-box'>
        EXPRESS <img className='express-icons' src={express} />
      </div>
      <div className='icon-box'>
        RUBY <img className='icons' src={ruby} />
      </div>
      <div className='icon-box'>
        RAILS <img className='icons' src={rails} />
      </div>
      <div className='icon-box'>
        REACT <i class='fab fa-react fa-3x' />
      </div>
    </div>
    </div>
  );
};

export default About;
