import React from 'react';
import HeaderImage from '../../assets/arnold1.jpg';
import data from './data';
import './header.css'

const Header = () => {
  return (
    <header id='header'>
       <div className="container header__container">
         <div className="header__profile">
          <img src={HeaderImage} alt="Header Potraint" />
          </div>
          <h3>Arnold Rams</h3>
          <p>Best Software developer in Town</p>
          <div className="header__cta">
             <a href="#contact" className="btn primary"> Let's Talk</a>
             <a href="#portfolio" className="btn light"> My Work</a>
          </div>
          <div className="header__socials">
            {
               data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
            }
          
         </div>
       </div>
    </header>
  )
}

export default Header