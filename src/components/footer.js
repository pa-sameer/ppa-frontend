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
                    <span className='col-3' id="needhelp">
                        <h2> Need help with anything?</h2>
                        <p>Lets hear all about it. <a href='#'>Contact us</a> </p>
                    </span>
                    <ul className=' offset-1 col-2 text-center'>
                        <li className='ppa-ul-first-element'>Home</li>
                        <li><a href='#'>What</a></li>
                        <li><a href='#'>Why</a></li>
                        <li><a href='#'>How</a></li>
                        <li><a href='#'>Where</a></li>
                    </ul>
                    <ul className='col-2 text-center'>
                        <li className='ppa-ul-first-element'>About</li>
                        <li><a href='#'>Program</a></li>
                        <li><a href='#'>Genesis</a></li>
                        <li><a href='#'>Development</a></li>
                        <li><a href='#'>Design</a></li>
                    </ul>
                    <ul className='col-2 text-center'>
                        <li className='ppa-ul-first-element'>News</li>
                        <li><a href='#'>Advertising</a></li>
                        <li><a href='#'>Public</a></li>
                        <li><a href='#'>General</a></li>
                    </ul>
                    <ul>
                        <li className='ppa-ul-first-element'>Help</li>
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#'>Team</a></li>
                        <li><a href='#'>Location</a></li>
                        <li><a href='#'>FAQ</a></li>
                    </ul>
                </div>
                <div className='row'>
                    <span className='col-3'>
                        <img src='images/ppa.svg'  width='30px' height='30px' />
                        Programming Pathshala
                    </span>
                    <span className='offset-6 col-3' id='footericon'>
                        <span><a href='mailto:samirchoudhary32@gmail.com'>{google}</a></span>
                        <span><a href='www.youtube.com'>{youtube}</a></span>
                        <span><a href='https://www.facebook.com/pa.sameer.choudhary/'>{facebook}</a></span>
                        <span><a href='https://twitter.com/quantum7824'>{twitter}</a></span>
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