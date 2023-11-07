
import '../Home/home.scss'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import home_image from '../../other_images/home_image.jpg'
import { BsArrowRight } from 'react-icons/bs'
import capabilities_home from '../../other_images/capabilities_home.jpg'

import erhardt_image from '../../other_images/erhardt_leimer.png'
import molex_image from '../../other_images/molex.png'
import vamendu_image from '../../other_images/vamendu.png'
import streamline_image from '../../other_images/streamline_controls.png'
import sonic_image from '../../other_images/sonic.jpg'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='home_container'>
        <div className="image_div">
          <img src={home_image} alt="" className='image' />
        </div>

      <p className='header'>VARDHAMAN ELECTROMECH IS THE SINGLE SOURCE PROVIDER <br></br> FOR ALL YOUR METAL FABRICATING  NEEDS.</p>

      <div className="para">
        <p>Located in Gandhinagar GIDC, Our 25+ years of experience and skilled team, enable us to take on most any project. Skilled at precision cutting, forming, fabrication and welding, engineering, paint and blast.</p>
      </div>

      <div className='learn_more' onClick={event => { window.location.href = '/about'}}> LEARN MORE</div>


      <div className="capabilities_box">
        <div className="image_part">
          <img src={capabilities_home} alt="" className='capa_image'/>
        </div>
        <div className="text_part">

        <p className='capa_title'>CAPABILITIES</p>
        <p className='capa_details'>Our contract manufacturing experience includes hundreds of successful projects in a wide range of applications within the medical, pharmaceutical, food, energy, automotive, aerospace industries, and more. Our capabilities include: CNC Laser, Precision Forming, Fabricating & Welding, Engineering, Paint & Blast.</p>
        <div className='contact' onClick={event => { window.location.href = '/capabilities'}}>LEARN MORE
              <BsArrowRight></BsArrowRight></div>
        </div>
      </div>

      <div className="clients_box">

      <p className='header'>OUR PARTNERS</p>

        <div className='logo_div'>
          <img src={erhardt_image} alt="" />
          <img src={sonic_image} alt="" />
          <img src={streamline_image} alt="" />
          <img src={vamendu_image} alt="" />
          <img src={molex_image} alt="" />
        </div>
      </div>
      <Footer/>
      </div>
    </div>
  )
}
