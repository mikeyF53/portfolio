import React, { Component } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { render } from "react-dom";
import { Route, Link } from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.main = React.createRef();
    this.about = React.createRef();
    this.works = React.createRef();
    this.contact = React.createRef();
    this.goTo = this.goTo.bind(this);
  }

  goTo(ref) {
    if (ref === 'main') {
      this.main.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (ref === 'about') {
      this.about.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else if (ref === 'works') {
      this.works.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (ref === 'contact') {
      this.contact.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  render() {
    return (
      <div className='App'>
        <Nav goTo={this.goTo} />
        <Main main={this.main} />
        <About about={this.about} />
        <Works works={this.works}/>
        <Contact contact={this.contact}/>
        <Footer />
      </div>
    );
  }
}

export default App;
render(<App />, document.getElementById("root"));
