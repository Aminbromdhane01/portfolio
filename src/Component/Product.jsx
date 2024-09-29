import React from 'react'
import './Product.css'


const Product = (props) => {
  return (
    <div className='p'>
        <div className="p-browser">
            <div className="p-circ"></div>
            <div className="p-circ"></div>
            <div className="p-circ"></div>
        </div>
        <a href={props.link} target = "_blank" rel='noreferrer' >
            <img src={props.img} alt="" className="p-img" />
        </a>
        <div className="p-desc">{props.desc}</div>
    </div>
  )
}

export default Product