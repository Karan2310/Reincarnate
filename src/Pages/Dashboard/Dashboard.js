import React from 'react';
// import Theme from '../../Utils/Theme';
import Sidebar from '../../Components/Dashboard/Sidebar/Sidebar'
import './Darshboard.css'
import SearchBar from '../../Components/Dashboard/SearchBar/SearchBar';

const Dashboard = () => {
    return (
        <>
            <div className="dashboard container-fluid">
                <div className="row h-100 px-3 px-md-0">
                    <div className="col-md-3 col-lg-2 p-3 h-100 d-none d-md-block">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-12 col-md-9 col-lg-10 py-3 px-0 pe-md-3 ps-md-2 ">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
