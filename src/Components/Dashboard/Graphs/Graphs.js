import React from 'react';
import './Graphs.css';
const Graphs = () => {
    return (
        <>
            <div className="company-graph cards mb-5 p-4 ">
                <div className="text-start w-100 d-flex align-items-center mb-3 ">
                    <i className="fa-solid fa-receipt" style={{ color: "#AC6849" }}></i>
                    <div>
                        <h5 className='fw-600'>Sales by Stores</h5>
                        <p>Reports</p>
                    </div>
                </div>
                <div className="container-fluid p-0 m-0 ">
                    <div className="row p-0 m-0">
                        <div className="col-lg-2 d-flex flex-column align-items-lg-center justify-content-between" >
                            <div className="company-card" id='company-1'>
                                <p>Market Cap</p>
                            </div>
                            <div className="company-card" id='company-2'>
                                <p>REM Price</p>
                            </div>
                            <div className="company-card" id='company-3'>
                                <p>gREM Price</p>
                            </div>

                        </div>
                        <div className="col-lg-8 d-flex align-items-lg-center justify-content-center" >

                        </div>
                        <div className="col-lg-2 d-flex flex-column align-items-lg-center justify-content-between" >
                            <div className="company-card" id='company-4'>
                                <p>Total Supply </p>
                            </div>
                            <div className="company-card" id='company-5'>
                                <p>Backing per REM </p>
                            </div>
                            <div className="company-card" id='company-6'>
                                <p>Current Index</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Graphs;
