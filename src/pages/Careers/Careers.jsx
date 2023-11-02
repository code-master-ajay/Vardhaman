import React from 'react'
import '../Careers/careers.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import career_image from '../../../images/career_image.jpg'

export default function Careers() {
  return (
    <div className='career_container'>
      <Navbar/>
      <div className='image_div'>
      <img src={career_image} className='image'></img>
      </div>
      <div className="career_bottom">
        <h3>CAREER OPPORTUNITIES AT VARDHAMAN ELECRTOMECH : </h3>
      </div>
      <Footer/>
      </div>
  )
}
