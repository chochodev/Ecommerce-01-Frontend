import React from 'react';
import 'remixicon/fonts/remixicon.css';

import Navbar from '../templates/Navbar';
import Nullbar from '../templates/Nullbar';
import Card from '../templates/Card';

import '../css/home.css';
import Footer from '../templates/Footer';

const Home = () => {
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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Home;