import React, { useState, useEffect } from 'react';
import './Home.css'
import './Clock.js'
import Clock from "./Clock";
import GetDate from "./Date";
import StateComponent from "./Coordinates";
import GetUserAgent from "./UserAgent";


const Home = () => {
    return (
        <div className='home-page-container'>
            <h2 className='home-page-container__head-text'>
                Приветствуем Вас!
            </h2>
            <div>
                <p>The time is:</p>
                <Clock/>
            </div>

            <div>
                <p>The date is:</p>
                <GetDate/>
            </div>

            <div>
                <p>Mouse coordinates (x) :</p>
                <StateComponent/>
            </div>

            <div>
                <p>Your user agent :</p>
                <GetUserAgent/>
            </div>

        </div>
    );
};

export default Home

