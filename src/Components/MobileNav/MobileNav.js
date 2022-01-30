import React, { useState } from 'react';
import './MobileNav.css'
import Sidebar from '../Sidebar/Sidebar'

const MobileNav = () => {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    return (
        <div className='mob-nav d-flex d-md-none'>
            <button onClick={toggleNav}>
                <i class="fa-solid fa-ellipsis-vertical" />
            </button>

            <div className={`menu d-flex align-items-center justify-content-center ${navActive ? "open" : ""}`}>
                <button id='close-btn' onClick={toggleNav} >
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <Sidebar />
            </div>
        </div>
    );
};

export default MobileNav;
