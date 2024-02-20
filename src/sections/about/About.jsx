import React from 'react';
import AboutImage from '../../assets/arnold2.jpg';
import CV from '../../assets/Arnold.pdf';
import data from './data';
import Card from '../../components/Card';
import { AiFillDownCircle } from 'react-icons/ai';
import './about.css';

const About = () => {
  return (
    <section id='about'>
        <div className="container about__container">
          <div className="about__left">
            <div className="about__portrait">
                <img src={AboutImage} alt="About Potrait" />
            </div>
          </div>
          <div className="about__right">
            <h2>About Me</h2>
            <div className="about__cards">
              {
                data.map(item => (
                  <Card key={item.id} className="about__card">
                    <span className='about__card-icon'>{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                  </Card>
                ))
              }
            </div>
            <p>Name is Arnold p to the HD</p>
            <p>Empror of the Ricco world that was found in the 13th century</p>
            <a href={CV} download className='btn primary'> Download CV <AiFillDownCircle/></a>
          </div>
        </div>
    </section>
  )
}

export default About