import React from 'react'
import '../Capabilities/capabilities.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import welding_img from '../../other_images/welding_10.png'
import welding from '../../other_images/welding_4.jpg'
import cnc_image from '../../other_images/cnc.jpg'
import paint_image from '../../other_images/paint.jpg'
import { BsArrowRight } from 'react-icons/bs'

export default function Capabilities() {
  return (
    <div>
      <Navbar />
      <div className='capabilities_container'>
        <div className='image_container'>
          <img src={welding_img} className='welding_image'></img>
        </div>

        <div className="header">
          <p>EXPANSIVE EXPERIENCE & CAPABILITIES<br></br> IN A WIDE VARIETY OF METAL MATERIALS</p>
        </div>

        <div className="para">
          <p>Vardhman Electromech offers expansive capabilities in a wide variety of metal materials.
            We employ seasoned craftsmen who have an average of 23+ years of welding experience and are skilled
            in a variety of unique and difficult metal materials, as well as challenging designs.
            We provide CNC laser, fabricating, welding, engineering, paint and blast services for a wide range of industries and applications.

          </p>
        </div>

        <div className="welding_div">
          <div className="img_div">
            <img src={welding} alt="image" />
          </div>
          <div className="text">
            <p className='title'>PRECISION FORMING, FABRICATING & WELDING</p>
            <p className='details'>Our fabricators’ skilled craftsmanship—built on an average of 23+ years’ experience—is proven to meet and exceed industry standards in all grades of fabrication, including sanitary and food grade.</p>
            <div className='contact'>CONTACT
              <BsArrowRight></BsArrowRight></div>
          </div>
        </div>

        <div className="welding_div">
          <div className="img_div">
            <img src={cnc_image} alt="image" />
            {/* <img src={welding} alt="image" /> */}
          </div>
          <div className="text">
            <p className='title'>CNC LASER</p>
            <p className='details'>Our multiple cutting capabilities allow for precise cutting of material to your specified requirements using the most advanced CNC and Laser cutting process equipment.</p>
            <div className='contact'>CONTACT
              <BsArrowRight></BsArrowRight></div>
          </div>
        </div>

        <div className="welding_div">
          <div className="img_div">
            <img src={paint_image} alt="image" />
            {/* <img src={welding} alt="image" /> */}
          </div>
          <div className="text">
            <p className='title'>PAINT & BLAST</p>
            <p className='details'>We offer complete industrial paint and blast services to meet your precise standards and can accommodate parts and equipment up to 26’ in length. Aluminum Oxide media is used for surface treatment prior to painting, in order to make the process environmentally friendly. Other surface preparations can be completed based on your specifications.</p>
            <div className='contact'>CONTACT
              <BsArrowRight></BsArrowRight></div>
          </div>
        </div>

        <div className='last_space'></div>
      </div>
      <Footer />
    </div>
  )
}
