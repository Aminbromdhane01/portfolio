import React, { useContext } from 'react'
import Sun from '../Images/sun.png'
import Moon from '../Images/moon.png'
import './Toggle.css'
import { ThemeContext } from '../context'
const Toggle = () => {
    const Theme = useContext(ThemeContext);

const handleclick = () =>
{
    Theme.dispatch ({type :"TOGGLE"})
}  
   
  return (
    <div className='t'>
        
         
         <div className="t-button"  onClick={handleclick} style = {{left :Theme.state.darkMode ? 0 :25 }}> </div>
    </div>
  )
}

export default Toggle