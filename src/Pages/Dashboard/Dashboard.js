import React from 'react';
// import Theme from '../../Utils/Theme';
import Sidebar from '../../Components/Dashboard/Sidebar/Sidebar'
import './Darshboard.css'

const Dashboard = () => {
    return (
        <>
            <div className="dashboard container-fluid">
                <div className="row h-100">
                    <div className="col-md-3 col-lg-2 p-3 h-100">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9 col-lg-10">

                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
