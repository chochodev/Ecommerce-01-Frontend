import React, { useEffect, useState } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Nullbar from '@/components/Nullbar';
import Card from '@/components/Card';

import '../css/home.css';

const Home = () => {
    
    // BACKEND
    let [products, setProducts] =  useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    let getProducts = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/products/');
        let data = await response.json();
        console.log(data);
        setProducts(data);
    }

    // FRONTEND
    // let [wishlist, setWishlist] = useState(false);
    

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
                    {products.map((product, index) => {
                        return (
                            <Card key={index} product={product} />
                        );
                    })}
                    
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Home;