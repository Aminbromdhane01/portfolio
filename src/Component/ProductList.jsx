import React from 'react'
import Product from './Product'
import './ProductList.css'
import { products } from '../data'


const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">
                Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="pl-desc">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi ipsam aut iste architecto fuga alias in laudantium debitis
               . Est illo quasi incidunt autem ipsam!
            </p>
            </div>
            <div className="pl-list">
                {products.map (item=>(<Product key={item.id} img = {item.img}  link = {item.link} desc = {item.desc}/>


                ))}
                
                
            </div>
        
      
    </div>
  )
}

export default ProductList
