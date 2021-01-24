import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const arrow_right = <FontAwesomeIcon icon={faArrowRight} />

function Headers(props){
    return(
        <header id='header'>
            <div className='container'>
                    <div className='row'>
                        <span className='col-5 text-left' id='headertext'>
                            <h1>Hire From Us!</h1>
                            <h4>Make your own success story!</h4>
                            <p>Your one stop solution for acing your coding skills for Tech Interview Preparation</p>
                            <button id='headerbutton'><a href='#'>Lets Hire <span>{arrow_right}</span> </a></button>
                        </span>
                        <span className='text-center col-7 mt-5'>
                            <img src='images/headerimage.png' alt='Header Image' height='120%' width='120%'/>
                        </span>
                    </div>
                </div>
        </header>
    );
};
export default Headers;