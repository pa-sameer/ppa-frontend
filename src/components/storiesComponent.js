import React , { useState } from 'react';
import Carousel from 'react-multi-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'react-multi-carousel/lib/styles.css';
const rightArrow = <FontAwesomeIcon icon={faArrowRight} />

const data = [
    {
        name: 'Nisha Sinha',
        images: 'images/girl1.jpeg',
        companyLogo: 'images/google.svg',
        paragraph: 'I have started looking ar problems in a different light and I am able to think about them. If I face any issues implementing the solutions, help is constantly avaiable. I would recommend PP.'
    },
    {
        name: 'Robin Khurana',
        images: 'images/girl3.jpg',
        companyLogo: 'images/google.svg',
        paragraph: 'I have started looking ar problems in a different light and I am able to think about them. If I face any issues implementing the solutions, help is constantly avaiable. I would recommend PP.'
    },
    {
        name: 'Aman Mehta',
        images: 'images/girl2.jpeg',
        companyLogo: 'images/google.svg',
        paragraph: 'I have started looking ar problems in a different light and I am able to think about them. If I face any issues implementing the solutions, help is constantly avaiable. I would recommend PP.'
    },
    {
        name: 'PPA',
        images: 'images/girl4.jpeg',
        companyLogo: 'images/google.svg',
        paragraph: 'I have started looking ar problems in a different light and I am able to think about them. If I face any issues implementing the solutions, help is constantly avaiable. I would recommend PP.'
    },
       
];


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
};


function Story(props){
    const [imageIndex, setImageIndex ] = useState(1);

    const handleChange = (next , {currentSlide, onmove}) => {
        console.log(next + ' '+ currentSlide+ ' '+ imageIndex);
        if( next > currentSlide)
        {
            setImageIndex((imageIndex+1)%data.length);
        }
        else {
            setImageIndex(Math.abs((imageIndex-1)%data.length));
        }

    };    
    const RenderCarousel = data.map((item , id) => {
        return(
            <div key={item.images} className={id === imageIndex ? 'slider active carousel-elements': 'slider carousel-elements ' }>
                <div className='card container cardImage' >
                    <div className='row'>
                        <div className='col-5'>
                            <img className='carousel-main-images'src={item.images} width='70%' height='220%' />
                            <a href='#'><img className='carousel-second-images' src='images/linkedin.svg' width='100%' height='60%'/></a>
                        </div>
                        <div className=' offset-3 col-4 mt-4'>
                            <img src={item.companyLogo} width='100%' height='100%' />
                        </div>
                    </div>
                    <div className='card-body row'>
                        <span className='col-12 text-left card-title carousel-title'>{item.name}</span>
                        <p className='col-12 fit-content carousel-paragragh'>{item.paragraph}</p>
                    </div>
                </div>
        </div>
        );
    });

    return(
        <section id='companystory'>
            <div className='container'>
                <div className='row'>
                    <h2 className='col-12 text-center'>Stories</h2>
                </div>    
                <div className='row'>
                 <Carousel className="carousel-container" swipeable={false}
                                                        draggable={false}
                                                        showDots={true}
                                                        autoPlay={true}
                                                        autoPlaySpeed={3000}
                                                        infinite={true}
                                                        responsive={responsive}
                                                        customTransition='ease-in-out'
                                                        transitionDuration='500'
                                                        keyBoardControl={true}
                                                        customTransition="all .5"
                                                        transitionDuration={500}
                                                        containerClass="carousel-container"
                                                        dotListClass="custom-dot-list-style"
                                                        itemClass="carousel-item-padding-40-px" 
                                                        centerMode={false} beforeChange={handleChange}>
                                                                            {RenderCarousel}
                 </Carousel>
                </div>
                <div className='row' id="readmorestories">
                    <span className='col-12 text-center'>
                        <button>
                            <a href='#'>Read More Storie <span>{rightArrow}</span> </a>
                        </button>
                    </span>
                </div>
            </div>
        </section>
    );
}
export default Story;