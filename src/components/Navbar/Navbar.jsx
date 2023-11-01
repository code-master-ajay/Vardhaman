import '../Navbar/navbar.scss'
import Logo from '../../../images/vardhman_logo-removebg-preview.png'

import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'
import React, { useState } from 'react';


export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
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
                <div className="menu">
                    <div className="hamburger" onClick={toggleMenu}>
                        <FiMenu/>
                    </div>
                    {showMenu ? (
                        <div className="mobileMenu">
                            <a href="#">ABOUT</a>
                            <a href="#">CAPABILITIES</a>
                            <a href="#">PROJECT GALLERY</a>
                            <a href="#">CAREER</a>
                            <a href="#">CONTACT</a>
                        </div>
                    ) : (
                        <div className="desktopMenu">
                            <a href="#">ABOUT</a>
                            <a href="#">CAPABILITIES</a>
                            <a href="#">PROJECT GALLERY</a>
                            <a href="#">CAREER</a>
                            <a href="#">CONTACT</a>
                        </div>
                    )}

                </div>

            </div>



        </div>
    )
}
