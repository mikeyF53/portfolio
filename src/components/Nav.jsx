import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  const { goTo } = props
   return (
    <div className='nav'>
    
      <a onClick={() => goTo('main')}>Home</a>
      <a onClick={() => goTo('about')}>About</a>
      <a onClick={() => goTo('works')}>Works</a>
    </div>
  )
}

export default Nav
