import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

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
                    <i className="menubar ri-menu-line"></i>
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
                            <i className="icon ri-menu-5-line"></i>
                        </div>
                        <ul className='search-select'>
                            {categories.map(({id, name})=>(
                                <li onClick={()=>{ setCategory(name)}} key={id}>
                                    <div className='select-text'>
                                        <i className="ri-smartphone-line"></i>
                                        <span>{name}</span>
                                    </div>
                                    <i className="ri-arrow-drop-right-line"></i>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>

                <button className='search-btn'>
                    <i className="ri-search-line search-icon"></i>
                </button>
            </div>

            <div className='nav'>
                <div>
                    <i className="ri-user-6-line icon"></i>
                    <span>Account</span>
                </div>
                <div>
                    <i className="ri-heart-line icon"></i>
                    <span>Wishlist</span>
                </div>
                <div>
                    <i className="ri-shopping-cart-line icon"></i>
                    <span>Cart</span>
                </div>
            </div>
        </div>

        </>
    )
}

export default Navbar;