import React from 'react';
import './Graphs.css'
import Chart1 from '../../../Assets/Yello chart.png'


const Graphs = () => {
    return (
        <>
            <div className="company-graph cards mb-5 p-4 ">
                <div className="container-fluid p-0 m-0 ">
                    <div className="row p-0 m-0">
                        <div className="col-lg-2 d-flex flex-column align-items-lg-center justify-content-between" >
                            <div className="company-card" id='company-1'>
                                <p>Company</p>
                            </div>
                            <div className="company-card" id='company-2'>
                                <p>Company</p>
                            </div>
                            <div className="company-card" id='company-3'>
                                <p>Company</p>
                            </div>
                            <div className="company-card" id='company-4'>
                                <p>Company</p>
                            </div>
                            <div className="company-card" id='company-5'>
                                <p>Company</p>
                            </div>
                            <div className="company-card" id='company-6'>
                                <p>Company</p>
                            </div>
                        </div>
                        <div className="col-lg-10 d-flex align-items-lg-center justify-content-center" >
                            <img src={Chart1} alt="graph" className='img-fluid m-0 mt-4 my-lg-0' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Graphs;
