import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Darshboard.css'
import SearchBar from '../../Components/SearchBar/SearchBar';
import Cards from '../../Components/Dashboard/Statics Cards/Cards';
import Chart1 from '../../Assets/Yello chart.png'
import Chart2 from '../../Assets/Pink chart.png'
import Chart3 from '../../Assets/Purple chart.png'

const Dashboard = () => {
    return (
        <>
            <div className="dashboard container-fluid" >
                <div className="row h-100">
                    <div className="col-md-3 col-lg-2 p-3 h-100 d-none d-md-block">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-9 col-lg-10 py-3 px-0 pe-md-3 ps-md-3 ps-lg-5 " >
                        <div className="d-flex align-content-center justify-content-center">
                            <SearchBar />
                        </div>

                        <div data-aos="fade-up">
                            {/* Cards */}
                            <Cards />

                            {/* Graphs */}
                            <div className="graphs px-4 px-md-0" >
                                <div className="cards mb-5 px-0">
                                    <div className="container-fluid">
                                        <div className="row p-0 m-0">
                                            <div className="col-md-6" >
                                                <img src={Chart1} className='img-fluid' alt="chart" style={{ borderRadius: "15px" }} />
                                            </div>
                                            <div className="col-md-6 mt-3 mt-md-0" >
                                                <img src={Chart2} className='img-fluid' alt="chart" style={{ borderRadius: "15px" }} />
                                                <img src={Chart3} className='img-fluid' alt="chart" style={{ borderRadius: "15px", marginTop: "1rem" }} />
                                            </div>

                                        </div>
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

export default Dashboard;
