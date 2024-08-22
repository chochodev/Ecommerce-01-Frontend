"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import * as RiIcons from 'react-icons/ri';

import '@/styles/components/cartitem.css';

const CartItem = ({product}) => {

    const [amount, setAmount] = useState(1)
  return (
    <li id='cart-items'>
        <div className='a-tag'>
            <div className='description'>
                <img src='/assets/images/product_01.jpg' className='img'/>
                <div>
                    <div className='title'>
                        <h3>{product.name}</h3>
                        <p className='seller'>Seller: {product.seller_name}</p>
                        <span>In Stock</span>
                    </div>
                    <div className='price'>
                        <span>&#8358;{product.new_price}<small> X {amount}</small></span>
                        <span>&#8358;{product.new_price * amount}</span>
                    </div>
                </div>
            </div>

            <div className='func'>
                <div className='amount'>
                    <button onClick={()=>amount !== 1 && setAmount(amount-1)}>-</button>
                    <span>{amount}</span>
                    <button onClick={()=>setAmount(amount+1)}>+</button>
                </div>

                <div className='button'>
                    <Link href='/' className='a-tag'>
                        <RiIcons.RiDeleteBin2Line className='icon'/>
                        <span>Remove Item</span>
                    </Link>
                    <Link href='/' className='a-tag'>
                        <RiIcons.RiHeartLine className='ri-icon'/>
                        <span>Add to Wishlist</span>
                    </Link>
                </div>
            </div>
        </div>

        <p className='hr'></p>
    </li>
  )
}

export default CartItem