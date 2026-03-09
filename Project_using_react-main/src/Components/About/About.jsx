import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrows leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia est numquam placeat soluta voluptas et perspiciatis qui, labore sunt quos aliquam consequuntur doloremque dolor. Porro corporis repudiandae ab! Error, optio?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia est numquam placeat soluta voluptas et perspiciatis qui, labore sunt quos aliquam consequuntur doloremque dolor. Porro corporis repudiandae ab! Error, optio?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia est numquam placeat soluta voluptas et perspiciatis qui, labore sunt quos aliquam consequuntur doloremque dolor. Porro corporis repudiandae ab! Error, optio?</p>
      </div>
    </div>
  )
}

export default About
