import React, { useState } from 'react';
import './SearchBar.css'
import Theme from '../../../Utils/Theme'

const SearchBar = () => {
    const [language, setLanguage] = useState(false);

    const chooseLanguage = () => {
        setLanguage(!language)
    }

    return (
        <>
            <div className="searchbar container-fluid py-2 px-4 flex-column flex-md-row">
                <div className="search-input">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search...' />
                </div>
                <div className="d-flex align-items-center justify-content-between w-100 mt-2 mt-md-0" style={{ maxWidth: "280px" }}>
                    {/* Theme */}
                    <Theme />
                    {/* Language */}
                    <button style={{ position: "relative" }} onClick={chooseLanguage}>
                        <img src="https://img.icons8.com/color/48/000000/great-britain-circular.png" alt='language' />
                        <div className={`language ${language ? "" : "d-none"}`}>
                            <ul style={{ listStyle: "none" }}>
                                <li className='nav_li'>
                                    <img src="https://img.icons8.com/color/48/000000/great-britain-circular.png" alt='language' className='me-2' />
                                    English
                                </li>
                                <li className='nav_li'>
                                    <img src="https://img.icons8.com/color/48/000000/germany-circular.png" alt='language' className='me-2' />
                                    Deutsche
                                </li>
                                <li className='nav_li'>
                                    <img src="https://img.icons8.com/color/48/000000/france-circular.png" alt='language' className='me-2' />
                                    Français
                                </li>
                                <li className='nav_li m-0'>
                                    <img src="https://img.icons8.com/color/48/000000/turkey-circular.png" alt='language' className='me-2' />
                                    Türkçe
                                </li>
                            </ul>
                        </div>
                    </button>
                    <button style={{ width: "fit-content" }} className>
                        <i class="fas fa-wallet"></i>
                        <p> Connect wallet</p>
                    </button>
                </div>
            </div>
        </>
    )

};

export default SearchBar;
