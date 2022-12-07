import React from 'react';

import './css/nullbar.css';

const Nullbar = () => {
    return(
        <>
        <div id="nullbar">
            <div>
                <span>You're not Signed in</span>
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