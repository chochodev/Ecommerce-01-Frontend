"use client";

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as RiIcons from 'react-icons/ri';

import '@/styles/components/card.css';

const Card = ({product, index}) => {

    // BACKEND FUNCTIONS

    // BACKEND FOR GET REQUEST ( GET )
    let [products, setProducts] =  useState([])

    useEffect(() => {
        getProducts()
    }, [])

    let getProducts = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/products/')
        let data = await response.json()
        setProducts()
    }


    // BACKEND FOR PUT REQUEST ( UPDATE )
    const {id} = useParams()

    let updateProduct = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/product/${id}/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(toggleWish())
        })
    }

    // CARTLIST UPDATE FUNCTION
    const [addToCart, setAddToCart] = useState(product.cartlist);
    const toggleCart = () => {
        
    }

    // WISHLIST UPDATE FUNCTION
    const [addToWish, setAddToWish] = useState(product.wishlist);
    const toggleWish = () => {
        if (product.wishlist == true) {
            return false;
        }
        else if (product.wishlist == false) {
            return true;
        }
    }

    useEffect(() => {

    }, [toggleWish])


  return (
    <div key={index} id='product-card'>
        <Link className='product-img' to={`/product/${product.id}`} >
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
                    <Link to='' onClick={toggleWish} className='cart'>
                        {!addToWish && <RiIcons.RiHeartLine className='ri-icon ri-heart-line'/>}
                        {addToWish && <RiIcons.RiHeartFill className='ri-icon ri-heart-fill'/>}
                    </Link>
                </div>
            </div>
            <Link to='' onClick={toggleCart} className='cart'>
                {!addToCart && <p>Add to Cart</p>}
                {addToCart &&  <p>Remove from Cart</p>}
            </Link>
        </div>
    </div>
  )
}

export default Card