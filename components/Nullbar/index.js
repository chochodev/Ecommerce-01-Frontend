"use client";

import React from 'react';
import '@/styles/components/nullbar.css';

const Nullbar = () => {
    return(
        <>
        <div id="nullbar">
            <div>
                <span>You&apos;re not Signed in</span>
            </div>
            <div>
                <a href="#">Sign In</a>
                <a href="#">Sign Up</a>
            </div>
        </div>
        </>
    )
}

export default Nullbar;