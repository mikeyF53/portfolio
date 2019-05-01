import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  const { goTo } = props
   return (
    <div className='nav'>
    
      <p onClick={() => goTo('/')}>Home</p>
      <p onClick={() => goTo('about')}>About</p>
      <p onClick={() => goTo('works')}>Works</p>
    </div>
  )
}

export default Nav
