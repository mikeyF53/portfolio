import React from 'react';
import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';
import p4 from '../img/p4.png';
import { Carousel } from 'react-responsive-carousel';

const Works = props => {
  const { works } = props;

  return (
    <div ref={works} className='works'>
      <h1>Works</h1>
      <Carousel 
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
      infiniteLoop={true}>
        <div className='project-img'>
          <img className='project-img' src={p1} />
          <a href='https://the-candy-drop.surge.sh/'>
          <p className='legend'>
          <h3>The Candy Drop</h3>
            An addicting game made with Javascript, HTML and CSS.
          </p>
          </a>
        </div>

        <div className='project-img'>
          <img className='project-img' src={p2} />
          <a href='https://nifty-swirles-9a8f36.netlify.com/'>
          <p className='legend'>
          <h3>What's for Lunch</h3>
            A random lunch generator to help you decide what to eat for lunch.
            This app was made with React along with the Yelp api.
          </p>
          </a>
        </div>
        <div className='project-img'>
          <img className='project-img' src={p3} />
          <a href="http://luxuriant-bun.surge.sh/">
          <p className='legend'>
            <h3>PostPic</h3>
            A group project to create a similiar app to Instagram. Built with
            React on Express.
          </p>
          </a>
        </div>
        <div className='project-img'>
          <img className='project-img' src={p4} />
          <a href='http://code-tutor.surge.sh/'>
          <p className='legend'>
            <h3>CodeTutor</h3>
            Created to teach typing code and code syntax. Created with React
            front-end and Rails back-end.
          </p>
          </a>
        </div>
      </Carousel>
      
    </div>
  );
};

export default Works;
