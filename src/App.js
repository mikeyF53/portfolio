import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Works from './components/Works';
import Footer from './components/Footer';
import About from './components/About'
import { Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Route exact path='/' render={() => <Main />} />
      <Route exact path='/works' render={() => <Works />} />
      <Route exact path='/about' render={() => <About /> } />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
