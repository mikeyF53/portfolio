import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../img/mlogo.png';



const Nav = (props) => {
  const { goTo } = props
   return (
    <div className='nav'>
      <a onClick={() => goTo('main')}><img className='logo' src='#'/></a>
      <a onClick={() => goTo('about')}>About</a>
      <a onClick={() => goTo('works')}>Works</a>
      <a onClick={() => goTo('contact')}>Contact</a>
    </div>
  )
}

export default Nav


