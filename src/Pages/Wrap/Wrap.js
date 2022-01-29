import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar'
import SearchBar from '../../Components/SearchBar/SearchBar';
import './Wrap.css'

const Wrap = () => {
    return (
        <>
            <div className="wrap container-fluid ">
                <div className="row h-100">
                    <div className="col-md-3 col-lg-2 p-3 h-100 d-none d-md-block">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-9 col-lg-10 py-3 px-0 pe-md-3 ps-md-3 ">
                        <div className="d-flex align-content-center justify-content-center ">
                            <SearchBar />

                            <div className="px-4 px-md-0 w-100">
                                <div className="cards container-fluid px-4">
                                    <h5 className='fw-600 text-start'>Wrap/Unwrap</h5>
                                    <div className="row my-2 mt-4 ">
                                        <div className="col-md-4 my-3 my-md-0 text-start text-md-center">
                                            <div className="d-flex flex-column">
                                                <p className='title'>sREM Price</p>
                                                <p className='data'>$63.57 </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 my-3 my-md-0 text-start text-md-center">
                                            <div className="d-flex flex-column">
                                                <p className='title'>Current Index</p>
                                                <p className='data'>74.5</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 my-3 my-md-0 text-start text-md-center">
                                            <div className="d-flex flex-column">
                                                <p className='title'>gREM Price</p>
                                                <p className='data'>$4,727.39</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='cw-btn mt-5 mb-2'>Connect Wallet</button>
                                </div>
                            </div>
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

export default Wrap;