import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar'
import SearchBar from '../../Components/SearchBar/SearchBar';

const Stake = () => {
    return (
        <>
            <div className="dashboard container-fluid ">
                <div className="row h-100">
                    <div className="col-md-3 col-lg-2 p-3 h-100 d-none d-md-block">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-9 col-lg-10 py-3 px-0 pe-md-3 ps-md-3 ">
                        <div className="d-flex align-content-center justify-content-center">
                            <SearchBar />
                        </div>


                        {/* Footer */}
                        <div className="footer d-flex justify-content-center">
                            <div className="container-fluid p-0 m-0 text-center">
                                <p>Copyright © 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stake;
