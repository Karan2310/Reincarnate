import React from 'react';
import Sidebar from '../../Components/Dashboard/Sidebar/Sidebar';

const Bond = () => {
    return (
        <>
            <div className="dashboard container-fluid">
                <div className="row h-100">
                    <div className="col-md-3 col-lg-2 p-3 h-100">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9 col-lg-10">
                        Bond
                    </div>
                </div>
            </div>
        </>
    )
};

export default Bond;
