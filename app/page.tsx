"use client";

import React, { useEffect, useState } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Nullbar from '@/components/Nullbar';
import Card from '@/components/Card';

import './home.css';

const Home = () => {
    
    let [products, setProducts] =  useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    let getProducts = async () => {
        let response = await fetch('/data/products/index.json/');
        let data = await response.json();
        console.log(data);
        setProducts(data);
    }

    return(
        <div id='home-page' className='Slider'>
            <div className='nullbar'>
                <Nullbar />
            </div>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='home-cards'>
                <div className='cards'>

                {/* CARD */}
                {products.map((product, index) => 
                    <Card key={index} product={product} index={index} />
                )}
                    
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Home;