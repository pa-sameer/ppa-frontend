import React from "react";

function Navigation(props){
    return(
        <nav>
           <div className='container'>
               <div className='navbar navbar-expand-lg row'>
                    <a className='col-4 navbar-brand' href='#' id='companylogo'>
                        <img src='images/ppa.svg' alt='logo' title='Programming Pathshala' height='40px' width='40px'/>
                                    Programming Pathshala
                    </a>
                    <span className=' col-8 float-right'>
                        <a className='offset-4 col-3' href='#'>Payment Plans</a>
                        <a className='col-3' href='#'>Curriculum</a>
                        <a  className=' col-3' href='#'>FAQs</a>
                    </span>
               </div>
           </div>
        </nav>
    );
};
export default Navigation;