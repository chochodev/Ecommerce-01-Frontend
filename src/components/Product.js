import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as RiIcons from 'react-icons/ri';

import Navbar from '../templates/Navbar';
import Footer from '../templates/Footer';

import '../css/product.css';

const Product = () => {

    const {id} = useParams()

    let [product, setProduct] = useState([])

    useEffect(() => {
        getProduct()
    }, [id])

    let getProduct = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/product/${id}`)
        let data = await response.json()
        console.log(data)
        setProduct(data)
    }
    
  return (
    <div id='product'>
        <Navbar className='navbar'/>

        <div className='body'>
            <div className='product'>
                <div className='img-div'>
                    <img src='/assets/images/product_01.jpg' className='img'/>
                    <div className='seller'>
                        <span>Seller: </span>
                        <Link to='' className='a-tag'>{product.seller_name}</Link>
                    </div>
                </div>

                <div className='info'>
                    <div className='main'>
                        <p className='heading'>100% refund + your package for free if delivery exceeds 45 days</p>
                        <h3>{product?.name}</h3>
                        <small>Product code: 2452543</small>
                        <div className='star'>
                            <RiIcons.RiStarFill className='icon star ri-star-fill'/>
                            <RiIcons.RiStarFill className='icon star ri-star-fill'/>
                            <RiIcons.RiStarFill className='icon star ri-star-fill'/>
                            <RiIcons.RiStarFill className='icon star ri-star-fill'/>
                            <RiIcons.RiStarFill className='icon star ri-star-fill'/>
                            <span>(433 verified ratings)</span>
                        </div>
                    </div>

                    {/* HR TAG */}
                    <p className='hr'></p>

                    <div className='sub'>
                        <div className='price'>
                            <h2>&#8358; {product.new_price}</h2>
                            <span>
                                <span>&#8358;{product.old_price} </span>
                                <aside>-{product.discount}%</aside>
                            </span>
                        </div>
                        <small>In stock</small>
                        <span> + shipping from &#8358; 2,000 to AKURE-NORTH (OVERCOMER'S LOGDE)</span>
                    </div>

                    <div className='button'>
                        <Link to='' className='a-tag'>
                            <RiIcons.RiShoppingCart2Line className='icon'/>
                            <span>Add to Cart</span>
                        </Link>
                        <Link to='' className='a-tag'>
                            <RiIcons.RiHeartLine className='ri-icon'/>
                            <span>Add to Wishlist</span>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className='aside'>
                <div className='func'>
                    <span>DELIVERY & RETURNS</span>
                    <div className='loc-from'>
                        <p>MallGo</p>
                        <span>Shipped from Dubai</span>
                    </div>
                    <div className='loc-to'>
                        <span>Choose your location</span>
                        <div className='location'>
                            <div className='initial'>
                                <span>Akure</span>
                                <RiIcons.RiArrowDropDownFill className='icon' />
                            </div>
                            <ul className="list">
                                <li>Lagos</li>
                                <li>Ibadan</li>
                                <li>Abuja</li>
                            </ul>
                        </div>
                        <div className='location'>
                            <div className='initial'>
                                <span>North</span>
                                <RiIcons.RiArrowDropDownFill className='icon' />
                            </div>
                            <ul className="list">
                                <li>North</li>
                                <li>South</li>
                                <li>Alagbaka</li>
                            </ul>
                        </div>

                        <div className='delivery'>
                            <RiIcons.RiTruckLine className='icon' />
                            <div>
                                <p className='heading'>Door Delivery</p>
                                <span className='price'>Delivery &#8358;2,005 </span>
                                <span className='date'>Ready for delivery between 04 November & 14 November when you order now</span>
                            </div>
                        </div>

                        <div className='delivery'>
                            <RiIcons.RiTruckLine className='icon' />
                            <div>
                                <p className='heading'>Pickup Station</p>
                                <span className='price'>Delivery &#8358;1,005 </span>
                                <span className='date'>Ready for delivery between 04 November & 14 November when you order now</span>
                            </div>
                        </div>

                        <div className='delivery'>
                            <RiIcons.RiTruckLine className='icon' />
                            <div>
                                <p className='heading'>Return Policy</p>
                                <span className='date'>Free return within 15 days for Official Store items and 7 days for other eligible items <Link to='' className='a-tag'>See more</Link></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='aside-dw'>
                    <div className='data'>
                        <img src='/assets/images/product_01.jpg' className='img'/>
                        <div className='info'>
                            <p>{product.name}</p>
                            <div className='prices'>
                                <h2>&#8358;{product.new_price}</h2>
                                <span>
                                    <small className='price'>&#8358;{product.old_price} </small>
                                    <aside className='discount'>-{product.discount}%</aside>
                                </span>
                            </div>
                        </div>
                    </div>
                    <Link to='' className='a-tag'>ADD TO CART</Link>
                </div>
            </div>

            <div className='details'>
                <span className='title'>Product Details</span>
                <p className='hr'></p>
                <div className='info'>
                    <div className='data'>
                        <span className='title'>Features</span>
                        <p>{product.features}</p>
                    </div>
                    <p className='hr'></p>
                    <div className='data'>
                        <span className='title'>Specifications</span>
                        <ul>
                            <li>{product.specifications}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <Footer className='footer'/>
    </div>
  )
}

export default Product