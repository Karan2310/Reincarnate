import React, { useState } from 'react';
import './SearchBar.css'
import MobileNav from '../MobileNav/MobileNav';
import Theme from '../../Utils/Theme'

const SearchBar = () => {
    const [language, setLanguage] = useState(false);

    const chooseLanguage = () => {
        setLanguage(!language)
    }

    return (
        <>
            <div className="searchbar container-fluid p-2 flex-row">
                <div className="d-flex align-items-center justify-content-between w-100 mt-md-0" >
                    {/* Theme */}
                    <Theme />
                    {/* Language */}
                    <button style={{ position: "relative" }} id='lang-btn' onClick={chooseLanguage} >
                        <img src="https://img.icons8.com/color/48/000000/great-britain-circular.png" alt='language' />
                        <div className={`language ${language ? "" : "d-none"}`}>
                            <ul style={{ listStyle: "none" }}>
                                <li className='nav_li' title='English'>
                                    <img src="https://img.icons8.com/color/48/000000/great-britain-circular.png" alt='English' className='me-2' />
                                    English
                                </li>
                                <li className='nav_li' title='French'>
                                    <img src="https://img.icons8.com/color/48/000000/france-circular.png" alt='French' className='me-2' />
                                    Français
                                </li>
                                <li className='nav_li m-0' title='Korean'>
                                    <img src="https://img.icons8.com/color/48/000000/south-korea-circular.png" alt='Korean' className='me-2' />
                                    한국인
                                </li>
                                <li className='nav_li m-0' title='Turkish'>
                                    <img src="https://img.icons8.com/color/48/000000/turkey-circular.png" alt='Turkish' className='me-2' />
                                    Türkçe
                                </li>
                                <li className='nav_li m-0' title='Chinese'>
                                    <img src="https://img.icons8.com/color/48/000000/china-circular.png" alt='Chinese' className='me-2' />
                                    中国人
                                </li>
                                <li className='nav_li m-0' title='Arabic'>
                                    <img src="https://img.icons8.com/color/48/000000/algeria-circular.png" alt='Arabic' className='me-2' />
                                    عربى
                                </li>
                                <li className='nav_li m-0' title='Spanish'>
                                    <img src="https://img.icons8.com/color/48/000000/spain-circular.png" alt='Spanish' className='me-2' />
                                    española
                                </li>
                                <li className='nav_li m-0' title='Vietnamese'>
                                    <img src="https://img.icons8.com/color/48/000000/vietnam-circular.png" alt='Vietnamese' className='me-2' />
                                    Tiếng Việt
                                </li>
                            </ul>
                        </div>
                    </button>
                    {/* Connect Wallet */}
                    <button style={{ width: "fit-content" }} className>
                        <i class="fas fa-wallet"></i>
                        <p> Connect wallet</p>
                    </button>
                    {/* Mobile Nav button */}
                    <MobileNav />
                </div>
            </div>
        </>
    )

};

export default SearchBar;
