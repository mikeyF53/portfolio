import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';
import p4 from '../img/p4.png';

class WorksCarousel extends Component {
  render() {
    return (
      <Carousel 
      showIndicators showStatus={false}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
      infiniteLoop={true}>
        <div className='project-img'>
          <a href='https://the-candy-drop.surge.sh/' />
          <img className='project-img' src={p1} />
          <h3>The Candy Drop</h3>
          <p className='legend'>
            An addicting game made with Javascript, HTML and CSS.
          </p>
        </div>

        <div className='project-img'>
          <img className='project-img' src={p2} />
          <p className='legend'>
            A random lunch generator to help you decide what to eat for lunch.
            This app was made with React along with the Yelp api.
          </p>
        </div>
        <div className='project-img'>
          <img className='project-img' src={p3} />
          <p className='legend'>
            
            A group project to create a similiar app to Instagram. Built with
            React on Express.
          </p>
        </div>
        <div className='project-img'>
          <img className='project-img' src={p4} />
          <p className='legend'>
            
            Created to teach typing code and code syntax. Created with React
            front-end and Rails back-end.
          </p>
        </div>
      </Carousel>
    );
  }
}

export default WorksCarousel;
