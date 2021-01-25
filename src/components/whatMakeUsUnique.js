import React from 'react';
function WhatMakesUsUnique(props){
    return(
        <section id='wmakeusunique'>
            <div className='container'>
                <div className='row'>
                    <h3 className='col-12 text-center'>What makes us unique?</h3>
                </div>
                <div className='row'>
                    <span className='col-4 text-center'>
                        <img src='images/1_.png' alt='hi' width='30%'/>
                        <p>High quality candidates with intensive training.</p>
                    </span>
                    <span className='col-4 text-center'>
                        <img src='images/2_.png' alt='hi' width='30%'/>
                        <p>No hidden hireing charges.</p>
                    </span>
                    <span className='col-4 text-center'>
                        <img src='images/3_.png' alt='hi' width='30%'/>
                        <p>Ready to join candidates across India.</p>
                    </span>  
                </div>
                <div className='row'>
                </div>
            </div>
        </section>
    )
};
export default WhatMakesUsUnique;