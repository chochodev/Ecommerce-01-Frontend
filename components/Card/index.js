"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import * as RiIcons from 'react-icons/ri';

import '@/styles/components/card.css';

const Card = ({product, index}) => {

    // CARTLIST UPDATE FUNCTION
    const [addToCart, setAddToCart] = useState(product.cartlist);
    const toggleCart = () => {
        
    }

    // WISHLIST UPDATE FUNCTION
    const [addToWish, setAddToWish] = useState(product.wishlist);
    const toggleWish = () => {
        if (addToWish == true) {
            setAddToWish(false);
            updateWishList(false)
        }
        else if (product.wishlist == false) {
            setAddToWish(true);
            updateWishList(true)
        }
    }


  return (
    <div key={index} id='product-card'>
        <Link className='product-img' href={`/product/${product.id}`} >
            <img src='/assets/images/product_01.jpg' />
        </Link>
        <div>
            <div className='product-info'>
                <span>{product.name} </span>
                <div className='rating'> 
                    <RiIcons.RiStarFill className='ri-icon star ri-star-fill'/>
                    <RiIcons.RiStarFill className='ri-icon star ri-star-fill'/>
                    <RiIcons.RiStarFill className='ri-icon star ri-star-fill'/>
                    <RiIcons.RiStarLine className='ri-icon star ri-star-line'/>
                    <RiIcons.RiStarLine className='ri-icon star ri-star-line'/>
                </div>
                <div className='price'>
                    <span>&#8358;{product.old_price}</span>
                    <span>&#8358;{product.new_price}</span>
                </div>
                <div className='price-d'>
                    <span> -{product.discount}%</span>
                    <Link href='/' onClick={toggleWish} className='cart'>
                        {addToWish ? <RiIcons.RiHeartFill className='ri-icon ri-heart-fill'/> : <RiIcons.RiHeartLine className='ri-icon ri-heart-line'/>}
                    </Link>
                </div>
            </div>
            <Link href='/' onClick={toggleCart} className='cart'>
                {!addToCart && <p>Add to Cart</p>}
                {addToCart &&  <p>Remove from Cart</p>}
            </Link>
        </div>
    </div>
  )
}

export default Card