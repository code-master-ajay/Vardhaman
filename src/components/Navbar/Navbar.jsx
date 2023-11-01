import '../Navbar/navbar.scss'
import Logo from '../../../images/vardhman_logo-removebg-preview.png'

import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'

export default function Navbar() {
  return (
    <div className='container'>
        <div className='top'>
        <div className='left'>
        </div>
        <div className='middle'>
            <img src={Logo} alt='Image' className='logo'></img>
        </div>
        <div className='right'>
            <div className="phone">
                <FiPhoneCall className='phone_icon' /> 
                <p>+91 8401453256</p>
            </div>
            <div className="email">
                <HiOutlineMail className='email_icon' /> 
                <p>abc@email.com</p>
            </div>
        </div>
        </div>
        <div className='bottom'>
            <FiMenu className='menu'/>
            <a href="#" className="about">ABOUT</a>
            <a href="#" className="about">CAPABILITIES</a>
            <a href="#" className="about">PRODUCT GALLERY</a>
            <a href="#" className="about">CAREER</a>
            <a href="#" className="about">CONTACT</a>

        </div>
            
        

    </div>
  )
}
