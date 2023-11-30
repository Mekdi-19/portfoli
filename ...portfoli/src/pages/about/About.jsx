import React from 'react'
import Info from '../../components/info'
import Status from '../../components/status'
import { FaDownload } from 'react-icons/fa'
import CV from "../../assets/MEkdes CV.pdf"
import Skills from '../../components/skills'
import "./About.css"
import ResumeItems from '../../components/ResumeItems'
import { resume } from "../../data";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section--title">
          About  <span> Me</span>
        </h2>
        <div className="about--container grid">
          <div className="about--Info">
            <h3 className="section--subtitle">Personal Infos</h3>
            <ul className="Info--list grid">
              <Info/>
            </ul>
            <br/>
            <a href={CV} download='' className="button">Download CV <span className="button--icon">
              <FaDownload/>
              </span></a>
          </div>
          <div className="stats grid">
            <Status/>

          </div>
        </div>
      </section>
      <div className="separator">
      </div>
      <section className='skills'>
        <h3 className="section--subtitle subtitle--center"> My Skills 
        </h3>
      <div className="skills--container grid">
        <Skills/>

      </div>
      </section>
      <div className='separator'>

      </div>
      <section className="resume">
      <h3 className="section--subtitle subtitle--center"> Education  and  expreince
        </h3>
        <div className="resume--container grid">
          <div className="resume--data">
           {resume.map((val)=>{
            if (val.category === 'experience') {
              return <ResumeItems key={val.id} {...val }/>
      
            }
           })}
          </div>

          <div className="resume--data">
           {resume.map((val)=>{
            if (val.category === 'education') {
              return <ResumeItems key={val.id} {...val }/>
      
            }
           })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
