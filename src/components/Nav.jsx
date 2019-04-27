import React from 'react'
import { Route, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/about'>About</Link>
      <Link to='/'>Home</Link>
      <Link to='/works'>Works</Link>
    </div>
  )
}

export default Nav
