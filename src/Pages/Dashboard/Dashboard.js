import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Darshboard.css'
import ActionBar from '../../Components/ActionBar/ActionBar';
import Cards from '../../Components/Dashboard/Cards/Cards';
import Graphs from '../../Components/Dashboard/Graphs/Graphs';

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
                            <ActionBar />
                        </div>

                        <div data-aos="fade-up">
                            {/* Cards */}
                            <Cards />

                            {/* Graphs */}
                            <div className="graphs px-4 px-md-0" >
                                <div className="row">
                                    <div className="col-md-10">
                                        <Graphs />
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
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
