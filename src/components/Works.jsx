import React from 'react'
import p1 from '../img/p1.png'
import p2 from '../img/p2.png'
import p3 from '../img/p3.png'
import p4 from '../img/p4.png'


const Works = () => {
  return (
    <div>
      <article>
      <img className='project-img' src={p1}/>
      <a href='https://the-candy-drop.surge.sh/'>The Candy Drop</a>
      <p>Desc</p>
      </article>
      <article>
      <img className='project-img' src={p2}/>
      <a href='https://nifty-swirles-9a8f36.netlify.com/'>What's for lunch?</a>
      <p>Desc</p>
      </article>
      <article>
      <img className='project-img' src={p3}/>
      <a href='http://luxuriant-bun.surge.sh/'>Postpic</a>
      <p>Desc</p>
      </article>
      <article>
      <img className='project-img' src={p4}/>
      <a href='https://stark-harbor-15567.herokuapp.com/' >CodeTutor</a>
      <p>Desc</p>
      </article>

    </div>
  )
}

export default Works
