import React from 'react'
import { portfolio } from '../../data'
import PortfolioItem from '../../components/PortfolioItem'
import './Port.css'

const Port = () => {
  return (
    <section className="portfolio section">
      <h2 className="section--title">My <span>portfolio</span></h2>
    
    <div className="portfolio--container container grid">
      {portfolio.map((item)=>{
        return <PortfolioItem key={item.id} {...item}/>
      })}
    </div>
    </section>
  )
}

export default Port


