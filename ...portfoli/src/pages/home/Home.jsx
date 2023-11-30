import React from 'react';
import profile from "../../assets/project-6.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css";
const Home = () => {
  return (
    <section className="home section grid">
      <img src={profile} alt="" className="home--image" />
      <div className="home--content">

      <div className="home--data">
        <h1 className="home--title"><span>I'm Mekdes haftu .</span> front end devloper and graphics designer</h1>
        <p className="home--description">I am a student at ASTU (Adama Science and Technology University) 
        studying Software Engineering. In addition to my studies, 
        I also have a passion for graphic design. I am certified by 
        ASTU after successfully completing a graphics course.</p>
             <Link to='/about' className='button'>more about me  <span className='button--icon'>
              <FaArrowRight/></span></Link>

      </div>
      </div>

      <div className="color--block"></div>
    </section>
  );
};

export default Home;