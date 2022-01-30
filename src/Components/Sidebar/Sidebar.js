import React, { useState } from 'react';
import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/Logo.png'

const Sidebar = (props) => {
    const [social, setSocial] = useState(false);

    const showSocial = () => {
        setSocial(!social)
    }
    return (
        <>
            <div className="sidebar conatiner-fluid  ">
                <div className="top p-3 d-flex align-items-center text-light justify-content-between w-100">
                    <a href="##" target={"blank"} className=' d-flex align-items-center'>
                        <img src={logo} alt="Reincarnate" className='img-fluid ' style={{ width: "30px" }} />
                        <p className='fw-700'>Reincarnate</p>
                    </a>
                    <button className='d-flex d-md-none ' onClick={props.toggleNav} >
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className="container-fluid middle py-1 px-3">
                    <NavLink activeClassName="active-link" to="/" className="nav_li">
                        <i className="fas fa-chart-line" ></i>
                        <p>Dashboard</p>
                    </NavLink>
                    <NavLink activeClassName="active-link" to="/bond" className="nav_li flex-column align-items-start">
                        <div className="d-flex align-items-center justify-content-start">
                            <i className="fas fa-certificate"></i>
                            <p>Bond</p>
                        </div>
                    </NavLink>
                    <div className="accordion bg-transparent mb-3" id="accordionExample">
                        <div className="accordion-item bg-transparent border-0">
                            <p className="accordion-header" id="headingThree">
                                <button style={{ fontSize: "0.7rem", color: "rgb(172,172,172)" }} className="accordion-button collapsed bg-transparent p-0  ms-2 mt-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Highest ROI
                                </button>
                            </p>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body p-0">
                                    <ul style={{ listStyle: "none", paddingLeft: "0.7rem", fontSize: "0.8rem" }}>
                                        <li>List 1</li>
                                        <li>List 2</li>
                                        <li>List 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavLink activeClassName="active-link" to="/stake" className="nav_li" >
                        <i className="fas fa-layer-group"></i>
                        <p>Stake</p>
                    </NavLink>
                    <NavLink activeClassName="active-link" to="/give" className="nav_li">
                        <i className="fas fa-heart"></i>
                        <p>Give</p>
                    </NavLink>
                    <NavLink activeClassName="active-link" to="/wrap" className="nav_li">
                        <img src="https://img.icons8.com/ios-filled/80/ffffff/wallpaper-roll.png" width={"20px"} alt='wrap' />
                        <p>Wrap</p>
                    </NavLink>
                    <NavLink activeClassName="active-link" to="/bridge" className="nav_li">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/bridge.png" width={"20px"} alt='bridge' />
                        <p>Bridge</p>
                    </NavLink>

                    <div className="container-fluid  divider-div">
                        <a href="https://facit-modern.omtankestudio.com/" target={"blank"} className="nav_li">
                            <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/ffffff/external-omega-denote-as-the-ultimate-limit-of-set-text-regular-tal-revivo.png" width={"20px"} alt='reincarnate' />
                            <p>Reincarnate Pro</p>
                        </a>
                    </div>

                    <div className="container-fluid px-0 pt-2">
                        <NavLink activeClassName="active-link" to="/forum" className="nav_li">
                            <i className="fas fa-solid fa-message"></i>
                            <p>Forum</p>
                        </NavLink>
                        <NavLink activeClassName="active-link" to="/governance" className="nav_li">
                            <i className="fas fa-solid fa-user-group"></i>
                            <p>Governance</p>
                        </NavLink>
                        <NavLink activeClassName="active-link" to="/docs" className="nav_li">
                            <i className="fas fa-solid fa-file"></i>
                            <p>Docs</p>
                        </NavLink>
                        <NavLink activeClassName="active-link" to="/bug_bounty" className="nav_li mb-4">
                            <i className="fas fa-solid fa-bug"></i>
                            <p>Bug Bounty</p>
                        </NavLink>
                    </div>

                </div>

                <div className="container-fluid bottom p-0 m-0" style={{ backgroundColor: social ? "#232328" : "#101016" }}>
                    <div className={`social_link p-2 d-flex align-items-center justify-content-around w-100 ${social ? "d-flex" : "d-none"}`} style={{ fontSize: "1.4rem", backgroundColor: "#232328", }}>
                        <a href="https://github.com/Reincarnate" target={"blank"}>
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://Reincarnate.medium.com/" target={"blank"}>
                            <i class="fab fa-medium"></i>
                        </a>
                        <a href="https://twitter.com/Reincarnate" target={"blank"}>
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://discord.com/invite/6QjjtUcfM4" target={"blank"}>
                            <i class="fab fa-discord"></i>
                        </a>
                    </div>
                    <div className="socials py-2 px-3" onClick={showSocial}>
                        <div className="nav_li m-0">
                            <i className="fas fa-share-alt"></i>
                            <p>Socials</p>
                        </div>
                    </div>
                    <div className="profile d-flex align-items-center ">
                        <div className="avatar me-3"></div>
                        <div className="d-flex flex-column">
                            <p>John Doe</p>
                            <p className='silent'>CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
