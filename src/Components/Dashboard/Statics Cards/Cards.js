import React from 'react';
import './Cards.css'

const Cards = () => {
    const cards = [
        {
            title: "Market Cap (USD)",
            data: "$589,501,773"
        },
        {
            title: "REM Price (USD)",
            data: "$62.72"
        },
        {
            title: "gREM Price (USD)",
            data: "$4,652.57"
        },
        {
            title: "Circulating Supply (total)",
            data: "9398825 / 10312398"
        },
        {
            title: "Backing per REM (USD)",
            data: "$56.40"
        },
        {
            title: "Current Index",
            data: "74.17 sOHM"
        },
    ]
    return (
        <>
            <div className="cards_con container-fluid mb-4">
                <div className="row ">
                    {cards.map((curElem) => {
                        const { title, data } = curElem
                        return (
                            <div className="col-md-4 mb-3" >
                                <div className="cards">
                                    <p className='title'>{title}</p>
                                    <h4 className='fw-600 mt-2'>{data}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
};

export default Cards;