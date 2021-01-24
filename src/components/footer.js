import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle, faYoutube  } from "@fortawesome/free-brands-svg-icons";

const google = <FontAwesomeIcon icon={faGoogle} />
const youtube = <FontAwesomeIcon icon={faYoutube} />
const facebook = <FontAwesomeIcon icon={faFacebook} />
const twitter = <FontAwesomeIcon icon={faTwitter} />

function Footer(props){
    return(
        <footer id='ppafooter'>
            <div className='container'>
                <div className='row'>
                    <span className='col-3'>
                        <h2> Need help with anything?</h2>
                        <p>Lets hear all about it. <a href='#'>Contact us</a> </p>
                    </span>
                    <ul className=' offset-1 col-2 text-center'>
                        <li className='ppa-ul-first-element'>Home</li>
                        <li>What</li>
                        <li>Why</li>
                        <li>How</li>
                        <li>Where</li>
                    </ul>
                    <ul className='col-2 text-center'>
                        <li className='ppa-ul-first-element'>About</li>
                        <li>Program</li>
                        <li>Genesis</li>
                        <li>Development</li>
                        <li>Design</li>
                    </ul>
                    <ul className='col-2 text-center'>
                        <li className='ppa-ul-first-element'>News</li>
                        <li>Advertising</li>
                        <li>Public</li>
                        <li>General</li>
                    </ul>
                    <ul>
                        <li className='ppa-ul-first-element'>Help</li>
                        <li>Contact</li>
                        <li>Team</li>
                        <li>Location</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='row'>
                    <span className='col-3'>
                        <img src='images/ppa.svg'  width='30px' height='30px' />
                        Programming Pathshala
                    </span>
                    <span className='offset-6 col-3' id='footericon'>
                        <span><a href='#'>{google}</a></span>
                        <span><a href='#'>{youtube}</a></span>
                        <span><a href='#'>{facebook}</a></span>
                        <span><a href='#'>{twitter}</a></span>
                    </span>
                </div>
            </div>
            <hr />
            <div className='container'>
                <div className='row'>
                    <span className='col-12 text-center'>All rights received @Programming Pathshala</span>
                </div>
            </div>
        </footer>
    );
};
export default Footer;