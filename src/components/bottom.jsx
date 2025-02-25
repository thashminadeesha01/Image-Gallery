import React from 'react';
import './bottom.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Bottom() {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 700 }, items: 2 },
        mobile: { breakpoint: { max: 700, min: 0 }, items: 1 }
    }


    return (                  
        <div className="gallery-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Explore Global Inspirations</h1>
                    <p>Discover stunning designs from around the world. Let us bring unique, creative ideas to your space.</p>
                    <button className="bbutton">Get Started</button>
                </div>
                <div className="hero-images1">
                    <img src="/images/I.jpg" alt="Nature 1" className="main-image"/>
                </div>
                <div className="hero-images2">
                    <img src="/images/J.jpg" alt="Nature 2" className="side-image"/>
                </div>
                
                <section className="maxs">
                    <div className="hero-content1">
                        <h1>Explore Global Inspirations</h1>
                        <p>Discover stunning designs from around the world. Let us bring unique, creative ideas to your space.</p>
                        <button className="bbutton">Get Started</button>
                    </div>
                    <div className='max'>
                        <div className="hero-images3">
                            <img src="/images/I.jpg" alt="Nature 1" className="main-image"/>
                        </div>
                        <div className="hero-images4">
                            <img src="/images/J.jpg" alt="Nature 2" className="side-image"/>
                        </div>
                    </div>
                </section>
            </section>
            
            <div className="gallery-numbers">
                <div className="gallery-number">01</div>
                <div className="gallery-number">02</div>
                <div className="gallery-number">03</div>
            </div>

            {/* Carousel Section */}
            <div className="carousel-container">
            <Carousel 
                    responsive={responsive}
                    infinite={true}  
                    transitionDuration={800}  
                    customTransition="transform 0.01s ease-in-out"  
                    arrows={false} 
                    autoPlay={true} 
                    autoPlaySpeed={2000} 
            >
   

                    <div className='gallery-items'>
                        <img className='product--image' src='/images/K.jpg' alt='K'/>
                    </div>
                    <div className='gallery-items'>
                        <img className='product--image' src='/images/L.jpg' alt='L'/>
                    </div>
                    <div className='gallery-items'>
                        <img className='product--image' src='/images/M.jpg' alt='M'/>
                    </div>
                    <div className='gallery-items'>
                        <img className='product--image' src='/images/N.jpg' alt='N'/>
                    </div>
                    <div className='gallery-items'>
                        <img className='product--image' src='/images/O.jpg' alt='O'/>
                    </div>
                    <div className='gallery-items'>
                        <img className='product--image' src='/images/P.jpg' alt='P'/>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Bottom;
