import React from 'react';
import './MobileNav.css'
import Sidebar from '../Sidebar/Sidebar'

const MobileNav = () => {
    return (
        <div className='mob-nav d-flex d-md-none'>
            <button className="ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i class="fa-solid fa-ellipsis-vertical"></i></button>

            <div class="offcanvas offcanvas-top d-md-none" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                {/* <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                <button id='close-btn' data-bs-dismiss="offcanvas" >
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div class="offcanvas-body d-flex align-items-center justify-content-center">
                    <Sidebar />
                </div>
            </div>

        </div>
    );
};

export default MobileNav;
