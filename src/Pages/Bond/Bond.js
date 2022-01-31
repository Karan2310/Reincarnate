import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar'
import ActionBar from '../../Components/ActionBar/ActionBar';
import './Bond.css'

const Bond = () => {
    const FarmPool = [
        {
            asset: "DAI",
            price: "$61.21",
            roi: "2.62%",
            duration: "14 days",
        },
        {
            asset: "FRAX",
            price: "$61.21",
            roi: "2.62%",
            duration: "14 days",
        },
        {
            asset: "UST (Wormhole)",
            price: "$61.21",
            roi: "2.62%",
            duration: "14 days",
        },

    ]
    return (
        <>
            <div className="bond container-fluid ">
                <div className="row h-100">
                    <div className="col-md-3 col-lg-2 p-3 h-100 d-none d-md-block">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-9 col-lg-10 py-3 px-0 pe-md-3 ps-md-3 " >
                        <div className="d-flex align-content-center justify-content-center ">
                            <ActionBar />

                            <div className="px-4 px-md-0 w-100 mb-5 " data-aos="fade-up">
                                <div className="cards container-fluid p-4">
                                    <h5 className='fw-600 text-start d-flex align-items-center'>
                                        <i class="fas fa-certificate" style={{ fontSize: "1.5rem", color: "#8275d8a7" }}></i>Bond (4, 4)</h5>
                                    <div className="row my-2 mt-4 ">
                                        <div className="col-md-6 my-3 my-md-0 text-start text-md-center">
                                            <div className="d-flex flex-column">
                                                <p className='title'>Treasury Balance (USD)</p>
                                                <p className='data'>$534,483,370</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-3 my-md-0 text-start text-md-center">
                                            <div className="d-flex flex-column">
                                                <p className='title'>REM Price (USD)</p>
                                                <p className='data'>$62.86</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-none d-md-flex flex-column flex-md-row  align-items-center justify-content-md-between  mt-md-4 ">
                                        <div className="d-flex align-items-center ">
                                            <div className="fw-500 ms-5 ">
                                                <p className='ms-5 silent'>Assets</p>
                                            </div>
                                        </div>
                                        <div className="mt-3 mb-2 m-md-0 ">
                                            <p className='ms-5 silent'>Price</p>
                                        </div>
                                        <div className="mt-3 mb-2 m-md-0 ">
                                            <p className='ms-4 silent'>ROI</p>
                                        </div>
                                        <div className="mt-3 mb-2 m-md-0 ">
                                            <p className='ms-4 silent'>Duration</p>
                                        </div>
                                        <div className='bond-btn'></div>
                                    </div>

                                    {FarmPool.map((curElem) => {
                                        const { asset, price, roi, duration } = curElem
                                        return (
                                            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-md-between  my-5 my-md-2">
                                                <div className="d-flex align-items-center assets" >
                                                    <div className="circle2 ms-1 ms-md-2" ></div>
                                                    <div className="fw-500 ms-3">
                                                        <p style={{ fontSize: "0.9rem", fontWeight: "600" }}>{asset}</p>
                                                        <a href="##" style={{ fontSize: "0.7rem" }}>View Asset <i class="fas fa-external-link-alt "></i></a>
                                                    </div>
                                                </div>
                                                <div className="mt-3 mb-2 m-md-0 d-flex justify-content-between tvl">
                                                    <p className='silent d-block d-md-none'>Price</p>
                                                    <p className='fw-500'>{price} </p>
                                                </div>
                                                <div className="mt-3 mb-2 m-md-0 d-flex justify-content-between tvl">
                                                    <p className='silent d-block d-md-none'>ROI</p>
                                                    <p className='fw-500 green'>{roi} </p>
                                                </div>
                                                <div className="mt-3 mb-2 m-md-0 d-flex justify-content-between tvl">
                                                    <p className='silent d-block d-md-none'>Duration</p>
                                                    <p className='fw-500'>{duration}</p>
                                                </div>
                                                <div className='bond-btn'>
                                                    <button className='cw-btn mt-3 mb-2 px-2 w-100 te-center'>Bond</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className="container my-2 mt-2 info" >
                                        <p className='silent' style={{ fontSize: "0.8rem" }}>Important: New bonds are auto-staked (accrue rebase rewards) and no longer vest linearly. Simply claim as sREM or gREM at the end of the term.</p>
                                    </div>
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

export default Bond;
