import React from 'react'
import { personalInfo } from "../data";

const info = () => {
  return (
    <> 
    {personalInfo.map(({title,description},index)=>{
    return (
      <li className="info--item" key={index}>
         <span className="info--title">{title}</span>
         <span className="info--describtion">{description}</span>
      </li>
    )
    })}
    </>
  )
}

export default info
