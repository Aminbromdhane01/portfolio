import React from 'react'
import './About.css'
import Me2 from '../Images/Me2.jpg'

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me2} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="title">About Me</h1>
        <div className="a-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque tempore ipsam 
        odio delectus? Tempora.</div>
        <div className='a-des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam corporis cumque aliquam pariatur eum quas, officiis rerum. Ratione, nemo ullam nobis, aliquam nihil blanditiis illo 
        cumque, autem recusandae eaque maxime.</div>
      </div>
    </div>
  )
}

export default About


