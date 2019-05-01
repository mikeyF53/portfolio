import React, { Component } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Works from './components/Works';
import Footer from './components/Footer';
import About from './components/About';
import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_home: 'home'
    };
    this.main = React.createRef();
    this.about = React.createRef();
    this.works = React.createRef();
    this.goTo = this.goTo.bind(this);
  }

  goTo(ref) {
    if (ref === 'main') {
      this.main.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (ref === 'about') {
      this.about.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (ref === 'works') {
      this.works.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    console.log(ref);
  }

  render() {
    return (
      <div className='App'>
        <Nav goTo={this.goTo} />
        <Main />
        <About />
        <Works />
        <Footer />
      </div>
    );
  }
}

export default App;
