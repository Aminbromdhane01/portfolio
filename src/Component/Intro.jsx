import React from 'react'
import './Intro.css' 
import Me from '../Images/Me.png'

const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
            <h2 className='i-intro'>Hello , My name is</h2>
            <h1 className='i-name'> Med Amine Ben Romdhane </h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                 <div className="i-title-item">Web Devoloper</div>
                 <div className="i-title-item">Mobile Developer</div>
                 <div className="i-title-item">UI/UX Designer</div>
                 
                 
                   

                </div>
            </div> 
            <div className="i-desc">
            I am a first-year Software engineering
             student at the Higher Institute of Applied Science 
            and Technology of Sousse .
            I design and develop services for customers of all sizes, specializing in creating
            stylish , modern websites and web services
            </div>
                  
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
        </div>


    </div>
  )
}

export default Intro
