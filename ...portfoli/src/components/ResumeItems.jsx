import React from 'react'
import parse from 'html-react-parser'

const ResumeItems = ({icon,year,title,desc}) => {
  return (
   <div className="resume--items">
    <div className="resume--icon">{icon}</div>
    <span className="resume--date">{year}
    </span>
    <h3 className="resume--subtitle">{parse(title)}</h3>
    <p className='resume--descrption'>{desc}</p> 
      </div>
  )
}

export default ResumeItems
