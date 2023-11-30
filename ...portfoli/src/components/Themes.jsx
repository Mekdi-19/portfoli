import React, { useEffect, useState } from 'react'
import {themes} from '../data'
import ThemesItems from './ThemesItems'
import { FaCog } from 'react-icons/fa'
import {BsSun ,BsMoon} from 'react-icons/bs'
import'./Themes.css'

const Themes = () => {
  const [showSwitcher,setShowSwitcher]=useState(false)
  const [color , setColor] = useState('')

  const changeColor = (color) => {
    setColor(color);
  }
  useEffect(() => {
    document.documentElement.style.setProperty('--first-color', color)
    localStorage.setItem('color' , color)

  },[color]
  )
  return (
    <div>
      <div className={`${showSwitcher ? 'show-switcher' : ''}style--switcher`}> 
      <div className="style--switcher-toggler" 
      onClick={()=>setShowSwitcher(!showSwitcher)}>
        <FaCog/>
        
        </div>
         <div className="themes--toggler">
          <BsMoon/>
         </div>
         <h3 className="style--switcher-title">
             style Switcher
         </h3>

         <div className="style--switcher-items">
          {themes.map((Themes,index)=>{
            return<ThemesItems key={index} {...themes} changeColor= {changeColor}/>
          })}
         </div>
        <div className="style--switcher-close"
        onClick={()=>setShowSwitcher(!showSwitcher)}>&times;</div>
        </div>
    </div>
  )
}

export default Themes
