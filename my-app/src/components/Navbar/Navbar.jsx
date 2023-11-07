import '../Navbar/navbar.scss'
import Logo from '../../other_images/logo.png'

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
                    <img src={Logo} alt='Image' className='logo' onClick={event =>  window.location.href='/'}></img>
                </div>
                <div className='right'>
                    <div className="phone">
                        <FiPhoneCall className='phone_icon' />
                        <p>+91 95103 23328</p>
                    </div>
                    <div className="email">
                        <HiOutlineMail className='email_icon' />
                        <p>sjvarhman@yahoo.com</p>
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
                            <a href="/about">ABOUT</a>
                            <a href="/capabilities">CAPABILITIES</a>
                            <a href="/gallery">PROJECT GALLERY</a>
                            <a href="/careers">CAREER</a>
                            <a href="/contact">CONTACT</a>
                        </div>
                    ) : (
                        <div className="desktopMenu">
                            <a href="/about">ABOUT</a>
                            <a href="/capabilities">CAPABILITIES</a>
                            <a href="/gallery">PROJECT GALLERY</a>
                            <a href="/careers">CAREER</a>
                            <a href="/contact">CONTACT</a>
                        </div>
                    )}

                </div>

            </div>



        </div>
    )
}
