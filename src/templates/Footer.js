import React from 'react';
import { Link } from 'react-router-dom';

import '../css/footer.css';

const Footer = () => {
  return (
    <div id='footer'>
        <div className='foot'>
            <span>Contact Info</span>
            <div>
                <div className='contact-info'>
                    <span>
                        <i className='ri-mail-line'></i>
                        <span>Email:</span>
                    </span>
                    <a href='#'>mikeychocho@gmail.com</a>
                </div>
                <div className='contact-info'>
                    <span>
                        <i className='ri-phone-line'></i>
                        <span>Phone:</span>
                    </span>
                    <a href='#'>+234 903 910 8667</a>
                </div>
            </div>
            <div className='social-media-icons'>
                <a href='#'>
                    <i className='ri-github-line'></i>
                </a>
                <a href='#'>
                    <i className='ri-github-line'></i>
                </a>
                <a href='#'>
                    <i className='ri-github-line'></i>
                </a>
                <a href='#'>
                    <i className='ri-github-line'></i>
                </a>
                <a href='#'>
                    <i className='ri-github-line'></i>
                </a>
            </div>
        </div>

        <div className='foot'>
            <span>Support</span>
            <div className='foot-links'>
                <Link to='' className='a-tag'>
                    <i className='ri-arrow-drop-right-line'></i>
                    <span>Contact Us</span>
                </Link>
                <Link to='' className='a-tag'>
                    <i className='ri-arrow-drop-right-line'></i>
                    <span>Payment Policy</span>
                </Link>
                <Link to='' className='a-tag'>
                    <i className='ri-arrow-drop-right-line'></i>
                    <span>Return Policy</span>
                </Link>
                <Link to='' className='a-tag'>
                    <i className='ri-arrow-drop-right-line'></i>
                    <span>Privacy Policy</span>
                </Link>
                <Link to='' className='a-tag'>
                    <i className='ri-arrow-drop-right-line'></i>
                    <span>FAQ</span>
                </Link>
                <Link to='' className='a-tag'>
                    <i className='ri-arrow-drop-right-line'></i>
                    <span>Terms & Condition</span>
                </Link>
            </div>
        </div>
        
        <div className='foot'>
            <span>Quick Links</span>
            <div className='foot-links'>
                <Link to='' className='a-tag'>
                    <i className='ri-arrow-drop-right-line'></i>
                    <span>My Account</span>
                </Link>
                <Link to='' className='a-tag'>
                    <i className='ri-arrow-drop-right-line'></i>
                    <span>Shopping Cart</span>
                </Link>
                <Link to='' className='a-tag'>
                    <i className='ri-arrow-drop-right-line'></i>
                    <span>My Wishlist</span>
                </Link>
                <Link to='' className='a-tag'>
                    <i className='ri-arrow-drop-right-line'></i>
                    <span>Sign In</span>
                </Link>
                <Link to='' className='a-tag'>
                    <i className='ri-arrow-drop-right-line'></i>
                    <span>Sign Out</span>
                </Link>
                <Link to='' className='a-tag'>
                    <i className='ri-arrow-drop-right-line'></i>
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