import React from 'react'
import data from './data';
import './services.css';
import Card from '../../components/Card';

const Services = () => {
  return (
    <section id='services'>
      <h2>My Services</h2>
      <p>I give the best code and design in town.</p>
        <div className="container service__container">
          {
            data.map(item => (
              <Card key={item.id} className="service light">
                <div className="service__icon">
                  {item.icon}
                </div>
                <div className="service__details">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </Card>
            ))
          }
        </div>
    </section>
  )
}

export default Services