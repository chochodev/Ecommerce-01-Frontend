"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import * as RiIcons from 'react-icons/ri';

import '@/styles/components/navbar.css';

const categories = [
    {id: 1, name: 'Phones'},
    {id: 2, name: 'Laptops'},
    {id: 3, name: 'TV'},
    {id: 4, name: 'Appliances'},
    {id: 5, name: 'Clothes'},
    {id: 6, name: 'Books'},
]

const Navbar = () => {
    const [category, setCategory] = useState('All Categories');
    return(
        <>
        <div id='navbar' className='Slider'>
            <div className='logo-div'>
                <h2 className='logo'>Mall<span>Go</span></h2>
            </div>
            <div className='menu'>
                <div className='menu-hover'>
                    <RiIcons.RiMenuLine className="menubar ri-icon ri-menu-line" />
                    <span className='menu-name'>MENU</span>
                    <RiIcons.RiArrowDropDownLine className="menubar ri-icon ri-menu-line" />
                </div>
                
                {/* MENU CONTAINER DATA */}
                <div id="menu-info">
                    <div className="hot-deals">
                        <div className="item-container">
                            <span>CLOTHES</span>
                            <ul>
                                <li className="item">
                                    <a href="#">- My Clothing Item</a>
                                </li>
                                <li className="item">
                                    <a href="#">- My Clothing Item</a>
                                </li>
                                <li className="item">
                                    <a href="#">- My Clothing Item</a>
                                </li>
                                <li className="item">
                                    <a href="#">- My Clothing Item</a>
                                </li>
                                <li className="item">
                                    <a href="#">- My Clothing Item</a>
                                </li>
                                <li className="item">
                                    <a href="#">- My Clothing Item</a>
                                </li>
                                <li className="item">
                                    <a href="#">- My Clothing Item</a>
                                </li>
                                <li className="item">
                                    <a href="#">- My Clothing Item</a>
                                </li>
                            </ul>
                        </div>
                        <div className="item-container">
                            <span>SMARTPHONES</span>
                            <ul>
                                <li className="item">
                                    <a href="#">- My mobile Item</a>
                                </li>
                                <li className="item">
                                    <a href="#">- My mobile Item</a>
                                </li>
                                <li className="item">
                                    <a href="#">- My mobile Item</a>
                                </li>
                                <li className="item">
                                    <a href="#">- My mobile Item</a>
                                </li>
                                <li className="item">
                                    <a href="#">- My desktop Item</a>
                                </li>
                                <li className="item">
                                    <a href="#">- My clothing Item</a>
                                </li>
                                <li className="item">
                                    <a href="#">- My mobile Item</a>
                                </li>
                                <li className="item">
                                    <a href="#">- My mobile Item</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="item-container">
                            <span>UPDATES</span>
                            <ul className="hot-ul">
                                <li className="">
                                    <a href="#">
                                        <img src="/assets/images/cat_5-1-3.jpg" />
                                        <p className='hot-info'>
                                            <span>New Category Added</span>
                                            <small>Feb 25th</small>
                                            <small>22:40</small>
                                        </p>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#">
                                        <img src="/assets/images/cat_5-1-3.jpg" />
                                        <p className='hot-info'>
                                            <span>New Category Added</span>
                                            <small>Feb 25th</small>
                                            <small>22:40</small>
                                        </p>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#">
                                        <img src="/assets/images/cat_5-1-3.jpg" />
                                        <p className='hot-info'>
                                            <span>New Category Added</span>
                                            <small>Feb 25th</small>
                                            <small>22:40</small>
                                        </p>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="#">
                                        <img src="/assets/images/cat_5-1-3.jpg" />
                                        <p className='hot-info'>
                                            <span>New Category Added</span>
                                            <small>Feb 25th</small>
                                            <small>22:40</small>
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="item-container">
                            <img src="/assets/images/shopping.jpg" />
                        </div>
                    </div>
                    <div className='ad'>
                        <img src='/assets/images/shopping.jpg' />
                        <span> - 50% OFF</span>
                    </div>
                </div>
            </div>

            {/* SEARCH BAR */}
            <div className='search-div'>
                <input type='text' placeholder='what are you looking for?' className='search' />

                <div className='category'>
                    <div>
                        <div className='category-text'>
                            <div >{category}</div>
                            <RiIcons.RiMenu5Line  className="icon ri-icon ri-menu-5-line"/>
                        </div>
                        <ul className='search-select'>
                            {categories.map(({id, name})=>(
                                <li onClick={()=>{ setCategory(name)}} key={id}>
                                    <div className='select-text'>
                                        <RiIcons.RiSmartphoneLine  className="ri-icon ri-smartphone-line"/>
                                        <span>{name}</span>
                                    </div>
                                    <RiIcons.RiArrowDropRightLine className="ri-icon ri-arrow-drop-right-line"/>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>

                <button className='search-btn'>
                    <RiIcons.RiSearchLine className="ri-icon ri-search-line search-icon"/>
                </button>
            </div>

            <div className='nav'>
                <div>
                    <Link href={'/'} className="icon">
                        <RiIcons.RiUser6Line className="ri-icon ri-user-6-line"/>
                    </Link>
                    <span>Account</span>    
                </div>
                <div>
                    <Link href='/cart#mainWishlist' className="icon" passHref>
                        <RiIcons.RiHeartLine className="ri-icon ri-heart-line"/>
                    </Link>
                    <span>Wishlist</span>    
                </div>
                <div>
                    <Link href={'/cart'} className="icon">
                        <RiIcons.RiShoppingCartLine className="ri-icon ri-shopping-cart-line"/>
                    </Link>
                    <span>Cart</span>    
                </div>
            </div>

        </div>
        <div style={{display: 'none'}} className='nav-sm'>
            <div>
                <RiIcons.RiUser6Line className="ri-icon ri-user-6-line icon"/>
                <span>Account</span>
                <RiIcons.RiArrowDropDownLine className="menubar icon ri-icon ri-menu-line" />
            </div>
            <div className='nav-sm-data'>
                <div>
                    <RiIcons.RiAccountBoxLine className='ri-icon icon'/>
                    <span>My Account</span>
                </div>
                <div>
                    <RiIcons.RiHeartLine className="ri-icon ri-heart-line icon"/>
                    <span>Wishlist</span>
                </div>
                <div>
                    <RiIcons.RiShoppingCartLine className="ri-shopping-cart-line icon"/>
                    <span>Cart</span>
                </div>
            </div>
        </div>

        </>
    )
}

export default Navbar;