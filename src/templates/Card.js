import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as RiIcons from 'react-icons/ri';

import '../css/card.css';

const Card = () => {

const [addToCart, setAddToCart] = useState(false);
const toggleCart = () => {
    setAddToCart(!addToCart);
}

  return (
    <div id='product-card'>
        <a className='product-img' href='/assets/images/product_01.jpg' target='_blank'>
            <img src='/assets/images/product_01.jpg' />
        </a>
        
        <div>
            <div className='product-info'>
                <span>Front Wheel Hub Bearing Assembly </span>
                <div className='rating'> 
                    <RiIcons.RiStarFill className='ri-icon star ri-star-fill'/>
                    <RiIcons.RiStarFill className='ri-icon star ri-star-fill'/>
                    <RiIcons.RiStarFill className='ri-icon star ri-star-fill'/>
                    <RiIcons.RiStarLine className='ri-icon star ri-star-line'/>
                    <RiIcons.RiStarLine className='ri-icon star ri-star-line'/>
                </div>
                <div className='price'>
                    <span>&#8358;25,999.98</span>
                    <span>&#8358;10,999.89</span>
                </div>
                <div className='price-d'>
                    <span> -60%</span>
                    <Link to='' onClick={toggleCart} className='cart'>
                        {!addToCart && <RiIcons.RiHeartLine className='ri-icon ri-heart-line'/>}
                        {addToCart && <RiIcons.RiHeartFill className='ri-icon ri-heart-fill'/>}
                    </Link>
                </div>
            </div>
            <Link to='' onClick={toggleCart} className='cart'>
                <p>Add to Cart</p>
            </Link>
        </div>
    </div>
  )
}

export default Card