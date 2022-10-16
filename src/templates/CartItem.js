import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as RiIcons from 'react-icons/ri';

import '../css/cartitem.css';

const CartItem = () => {
    const [amount, setAmount] = useState(1)
  return (
    <li id='cart-items'>
        <Link to='' className='a-tag'>
            <div className='description'>
                <img src='/assets/images/product_01.jpg' className='img'/>
                <div>
                    <div className='title'>
                        <h3>Front Wheel Hub Bearing Assembly</h3>
                        <p className='seller'>Seller: the seller na</p>
                        <span>In Stock</span>
                    </div>
                    <div className='price'>
                        <span>&#8358;19,992.98<small> X 2</small></span>
                        <span>&#8358;39,990.00</span>
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
                    <Link to='' className='a-tag'>
                        <RiIcons.RiDeleteBin2Line className='icon'/>
                        <span>Remove Item</span>
                    </Link>
                    <Link to='' className='a-tag'>
                        <RiIcons.RiHeartLine className='ri-icon'/>
                        <span>Add to Wishlist</span>
                    </Link>
                </div>
            </div>
        </Link>

        <p className='hr'></p>
    </li>
  )
}

export default CartItem