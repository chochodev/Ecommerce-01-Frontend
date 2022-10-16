import React from 'react';
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Navbar from '../templates/Navbar';

import '../css/cart.css';
import Card from '../templates/Card';
import CartItem from '../templates/CartItem';
import Footer from '../templates/Footer';

const Cart = () => {
  return (
    <div id='cart'>
        <Navbar className='navbar'/>

        <div className='total'>
            <span>Total (2 items) </span>
            <span>&#8358;30,009</span>
        </div>

        <div className='body'>
            <div className='cart-items'>
                <ul className='items'>
                    <CartItem />
                    <CartItem />
                </ul>
                <div className='aside'>
                    <div className='info'>
                        <span>CART SUMMARY</span>
                        {/* hr */}
                        <p className='hr'></p>
                        <div className='total'>
                            <div className='amount'>
                                <span>Subtotal: </span>
                                <h2>&#8358;30,009</h2>
                            </div>
                            <p>Delivery fee not included yet</p>
                        </div>
                        <p className='hr'></p>

                        <Link to='' className='checkout'>Checkout</Link>
                    </div>
                    <div className='return'>
                        <span>Returns are easy</span> 
                        <small>Free returns within 15days of official store items and 7days for other eligible items</small>
                    </div>
                </div>
            </div>

            <div className='wishlist-items'>
                <span>Wishlist Items</span>
                <ul className='items'>
                    <li className='item'>
                    <Link to=''>
                        <img src='/assets/images/product_01.jpg' className='img'/>
                        <div className='description'>
                            <h3>Front Wheel Hub Bearing Assembly</h3>
                            <span>&#8358;30,000</span>
                            <p>&#8358;40,000</p>
                        </div>
                    </Link>
                    </li>
                </ul>
            </div>
        </div>

        <Footer className='footer'/>
    </div>
  )
}

export default Cart;