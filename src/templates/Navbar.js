import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

import * as RiIcons from 'react-icons/ri';

import '../css/navbar.css';


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
                    <span>MENU</span>
                </div>
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
                    <i></i>
                </button>
            </div>

            <div className='nav'>
                <div>
                    <RiIcons.RiUser6Line className="ri-icon ri-user-6-line icon"/>
                    <i></i>
                    <span>Account</span>
                </div>
                <div>
                    <RiIcons.RiHeartLine className="ri-icon ri-heart-line icon"/>
                    <i></i>
                    <span>Wishlist</span>
                </div>
                <div>
                    <RiIcons.RiShoppingCartLine className="ri-shopping-cart-line icon"/>
                    <i></i>
                    <span>Cart</span>
                </div>
            </div>
        </div>

        </>
    )
}

export default Navbar;