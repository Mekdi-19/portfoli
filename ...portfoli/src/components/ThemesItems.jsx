import React from 'react'

const ThemesItems = ({color , img, changeColor}) => {
  return (
    <img src={img} alt="" className="theme--img"  onClick={()=>{changeColor(color)}}/>
  )
}

export default ThemesItems
