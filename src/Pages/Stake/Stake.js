import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar'
import ActionBar from '../../Components/ActionBar/ActionBar';
import './Stake.css'

const Stake = () => {
    const FarmPool = [
        {
            asset: "gREM-AVAX",
            tvl: "$4,767,398.72",
            button: "Stake on Joe"
        },
        {
            asset: "gREM-wETH",
            tvl: "$2,985,650.26",
            button: "Stake on Sushi"
        },
        {
            asset: "gREM-wETH",
            tvl: "$2,038,497.23",
            button: "Stake on Joe (Polygon)"
        },
        {
            asset: "gREM-FTM",
            tvl: "$1,099,128.90",
            button: "Stake on Spirit (Fantom)"
        },
    ]
    return (
        <>
            <div className="stake container-fluid ">
                <div className="row h-100">
                    <div className="col-md-3 col-lg-2 p-3 h-100 d-none d-md-block">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-9 col-lg-10 py-3 px-0 pe-md-3 ps-md-3 ">
                        <div className="d-flex align-content-center justify-content-center ">
                            <ActionBar />

                            <div className="px-4 px-md-0 w-100" data-aos="fade-up">
                                <div className="cards container-fluid px-4">
                                    <p className='fw-600 text-start' style={{ fontSize: "1.1rem" }}><i className="fas fa-layer-group" style={{ color: "#ac6849", fontSize: "1.3rem" }}></i>Single Stake (3, 3)</p>
                                    <p className='fw-500 text-start mt-1' style={{ fontSize: "0.6rem" }}>5 hrs, 50 mins to next rebase</p>
                                    <div className="row my-2 mt-3 ">
                                        <div className="col-md-4 my-3 my-md-0 text-start text-md-center">
                                            <div className="d-flex flex-column">
                                                <p className='title'>APY</p>
                                                <p className='data'>1,328.5%</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 my-3 my-md-0 text-start text-md-center">
                                            <div className="d-flex flex-column">
                                                <p className='title'>Total Value Deposited (USD)</p>
                                                <p className='data'>$500,811,977</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 my-3 my-md-0 text-start text-md-center">
                                            <div className="d-flex flex-column">
                                                <p className='title'>Current Index (REM)</p>
                                                <p className='data'>74.7 sREM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='cw-btn mt-4 mb-3'>Connect Wallet</button>
                                </div>

                                <div className="cards container-fluid p-4 my-5">
                                    <h5 className='fw-600 text-start mb-4' style={{ fontSize: "1.1rem" }}>Farm Pool</h5>

                                    <div className="d-none d-md-flex flex-column flex-md-row  align-items-center justify-content-md-between  my-md-1 ">
                                        <div className="d-flex align-items-center ">
                                            <div className="fw-500 ms-5 ">
                                                <p className='ms-5 silent' style={{ fontSize: "0.rem" }}>Assets</p>
                                            </div>
                                        </div>
                                        <div className="mt-3 mb-2 m-md-0 ">
                                            <p className='ms-4 silent' style={{ fontSize: "0.9rem" }}>TVL</p>
                                        </div>
                                        <div className='stake-btn'></div>
                                    </div>

                                    {FarmPool.map((curElem, index) => {
                                        const { asset, tvl, button } = curElem
                                        return (
                                            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-md-between  my-5 my-md-2" key={index}>
                                                <div className="d-flex align-items-center ">
                                                    <div className="circle"></div>
                                                    <div className="circle2" ></div>
                                                    <div className="fw-500 ms-3">
                                                        <p style={{ fontSize: "1rem" }}>{asset}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-3 mb-2 m-md-0 d-flex justify-content-between tvl">
                                                    <p className='silent d-block d-md-none'>TVL</p>
                                                    <p className='fw-500' style={{ fontSize: "1rem" }}>{tvl} </p>
                                                </div>
                                                <div className='stake-btn'>
                                                    <button className='cw-btn mt-3 mb-2 px-2 w-100 te-center' style={{ fontSize: "0.9rem" }}>{button} <i class="fas fa-external-link-alt ms-2"></i></button>
                                                </div>
                                            </div>
                                        )
                                    })}
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

export default Stake;
