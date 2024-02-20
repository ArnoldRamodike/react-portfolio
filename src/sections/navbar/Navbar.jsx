import React from 'react';
import Logo from '../../assets/Arnold.jpg';
import data from'./data';
import {IoIosColorPalette} from 'react-icons/io'
import './navbar.css'

const Navbar = () => {
  return (
    <nav id='navbar'>
       <div className="container">
         <div className="nav__container">
          <a href="index.html" className='nav__logo'>
            <img src={Logo} alt="Logo" />
          </a>
          <ul className='nav__menu'>
            {
              data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
            }
          </ul>
          <button id='theme__icon'>
            <IoIosColorPalette/>
          </button>
          </div>  
       </div>
    </nav>
  )
}

export default Navbar