import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <i className='star ri-star-fill'></i>
                    <i className='star ri-star-fill'></i>
                    <i className='star ri-star-fill'></i>
                    <i className='star ri-star-line'></i>
                    <i className='star ri-star-line'></i>
                </div>
                <div className='price'>
                    <span>&#8358;25,999.98</span>
                    <span>&#8358;10,999.89</span>
                </div>
                <div className='price-d'>
                    <span> -60%</span>
                    <Link to='' onClick={toggleCart} className='cart'>
                        {!addToCart && <i className='ri-heart-line'></i>}
                        {addToCart && <i className='ri-heart-fill'></i>}
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