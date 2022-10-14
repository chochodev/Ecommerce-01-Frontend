import React from 'react';
import { Link } from 'react-router-dom';

import * as RiIcons from 'react-icons/ri';

import '../css/footer.css';

const Footer = () => {
  return (
    <div id='footer'>
        <div className='foot'>
            <span>Contact Info</span>
            <div>
                <div className='contact-info'>
                    <span>
                        <RiIcons.RiMailLine className='ri-icon ri-mail-line'/>
                        <span>Email:</span>
                    </span>
                    <a href='#'>mikeychocho@gmail.com</a>
                </div>
                <div className='contact-info'>
                    <span>
                        <RiIcons.RiPhoneLine className='ri-icon ri-phone-line'/>
                        <span>Phone:</span>
                    </span>
                    <a href='#'>+234 903 910 8667</a>
                </div>
            </div>
            <div className='social-media-icons'>
                <a href='#'>
                    <RiIcons.RiGithubFill className='ri-icon ri-github-line'/>
                </a>
                <a href='#'>
                    <RiIcons.RiFacebookFill className='ri-icon ri-github-line'/>
                </a>
                <a href='#'>
                    <RiIcons.RiInstagramFill className='ri-icon ri-github-line'/>
                </a>
                <a href='#'>
                    <RiIcons.RiTwitterFill className='ri-icon ri-github-line'/>
                </a>
                <a href='#'>
                    <RiIcons.RiWhatsappFill className='ri-icon ri-github-line'/>
                </a>
            </div>
        </div>

        <div className='foot'>
            <span>Support</span>
            <div className='foot-links'>
                <Link to='' className='a-tag'>
                    <RiIcons.RiArrowDropRightLine className='ri-icon ri-arrow-drop-right-line'/>
                    <span>Contact Us</span>
                </Link>
                <Link to='' className='a-tag'>
                    <RiIcons.RiArrowDropRightLine className='ri-icon ri-arrow-drop-right-line'/>
                    <span>Payment Policy</span>
                </Link>
                <Link to='' className='a-tag'>
                    <RiIcons.RiArrowDropRightLine className='ri-icon ri-arrow-drop-right-line'/>
                    <span>Return Policy</span>
                </Link>
                <Link to='' className='a-tag'>
                    <RiIcons.RiArrowDropRightLine className='ri-icon ri-arrow-drop-right-line'/>
                    <span>Privacy Policy</span>
                </Link>
                <Link to='' className='a-tag'>
                    <RiIcons.RiArrowDropRightLine className='ri-icon ri-arrow-drop-right-line'/>
                    <span>FAQ</span>
                </Link>
                <Link to='' className='a-tag'>
                    <RiIcons.RiArrowDropRightLine className='ri-icon ri-arrow-drop-right-line'/>
                    <span>Terms & Condition</span>
                </Link>
            </div>
        </div>
        
        <div className='foot'>
            <span>Quick Links</span>
            <div className='foot-links'>
                <Link to='' className='a-tag'>
                    <RiIcons.RiArrowDropRightLine className='ri-icon ri-arrow-drop-right-line'/>
                    <span>My Account</span>
                </Link>
                <Link to='' className='a-tag'>
                    <RiIcons.RiArrowDropRightLine className='ri-icon ri-arrow-drop-right-line'/>
                    <span>Shopping Cart</span>
                </Link>
                <Link to='' className='a-tag'>
                    <RiIcons.RiArrowDropRightLine className='ri-icon ri-arrow-drop-right-line'/>
                    <span>My Wishlist</span>
                </Link>
                <Link to='' className='a-tag'>
                    <RiIcons.RiArrowDropRightLine className='ri-icon ri-arrow-drop-right-line'/>
                    <span>Sign In</span>
                </Link>
                <Link to='' className='a-tag'>
                    <RiIcons.RiArrowDropRightLine className='ri-icon ri-arrow-drop-right-line'/>
                    <span>Sign Out</span>
                </Link>
                <Link to='' className='a-tag'>
                    <RiIcons.RiArrowDropRightLine className='ri-icon ri-arrow-drop-right-line'/>
                    <span>Terms & Condition</span>
                </Link>
            </div>
        </div>

        <div className='foot'>
            <div>
                <input placeholder='Email' />
                <Link to='' className='a-tag'>Suscribe to our Newsletter</Link>
            </div>
            <div>
                <span>Customer Service</span>
                <Link to='' className='a-tag'>Need Assistance?</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer