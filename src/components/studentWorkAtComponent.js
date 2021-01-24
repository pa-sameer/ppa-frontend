import React from 'react';

const   IMAGES = [ 
    {   title: 'amazon',
        image: 'images/amazon.svg'
    },
    {
        title: 'flipkart',
        image: 'images/flipkart.svg'
    },
    {
        title: 'goldmansach',
        image: 'images/goldmansach.svg'
    },
    {
        title: 'google',
        image: 'images/google.svg'
    },
    {
        title: 'hotstar',
        image: 'images/hotstar.svg'
    },
    {
        title: 'microsoft',
        image: 'images/microsoft.svg'
    },
    {
        title: 'ola',
        image: 'images/ola.svg'
    },
    {
        title: 'adobe',
        image: 'images/adobe.svg'
    },
    {
        title: 'oyo',
        image: 'images/oyo.svg'
    },
    {
        title: 'paloalto',
        image: 'images/paloalto.png'
    },
    {
        title: 'walmart.svg',
        image: 'images/walmart.svg'
    },
    {
        title: 'zynga',
        image: 'images/zynga.svg'
    },
];



function StudentWorkAt(props){
    return(
        <section id='studentworkat'>
            <div className='container' >
                <div className='row' >
                    <h3 className='col-12 text-center' >Our Students work at </h3>  
                    {IMAGES.map(item => <img src={item.image} alt={item.title} title={item.title} className='col-3 mb-5' width='50px' height='60px'/>)}   
                </div>
            </div>
        </section>        
    );
}

export default StudentWorkAt;