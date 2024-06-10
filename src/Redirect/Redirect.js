import React from "react";
import { useNavigate } from "react-router-dom";
import './Redirect.css'
import {Link} from "react-router-dom";



function Redirect() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `newPath`;
        navigate(path)

        return (
            <div className='contacts-page-container'>
                <p>fjhgjhg</p>
                <button className='button' onClick={routeChange}>
                    На главную
                </button>
            </div>
        );
    }
}

export default Redirect;


