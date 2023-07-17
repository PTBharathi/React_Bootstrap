import React, { useState, useEffect } from 'react';
import './AboutStyle.css'
import Picture from '../../assets/Images/About/Carousel/0.png'

const Carouselitem = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [[0,1,2,3,4,5,6,7,8,9],[9,8,7,6,5,4,3,2,1,0]];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Change interval time in milliseconds (e.g., 2000 for 2 seconds)
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return (
      <div id="myCarousel" className="row carousel slide" data-ride="carousel">
  
        {/* Slides */}
        <div className="col-12 carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img src={require(`../../assets/Images/About/Carousel/${image[0]}.png`)} alt="image" className='Carosalimage' />
              <img src={require(`../../assets/Images/About/Carousel/${image[1]}.png`)} alt="image" className='Carosalimage' />
              <img src={require(`../../assets/Images/About/Carousel/${image[2]}.png`)} alt="image" className='Carosalimage' />
              <img src={require(`../../assets/Images/About/Carousel/${image[3]}.png`)} alt="image" className='Carosalimage' />
              <img src={require(`../../assets/Images/About/Carousel/${image[4]}.png`)} alt="image" className='Carosalimage' />
              <img src={require(`../../assets/Images/About/Carousel/${image[5]}.png`)} alt="image" className='Carosalimage' />
              <img src={require(`../../assets/Images/About/Carousel/${image[6]}.png`)} alt="image" className='Carosalimage' />
              <img src={require(`../../assets/Images/About/Carousel/${image[7]}.png`)} alt="image" className='Carosalimage' />
              <img src={require(`../../assets/Images/About/Carousel/${image[8]}.png`)} alt="image" className='Carosalimage' />
              <img src={require(`../../assets/Images/About/Carousel/${image[9]}.png`)} alt="image" className='Carosalimage' />
            </div>
          ))}
        </div>
  
        {/* Controls */}
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
  
      </div>
    );
  };
export default Carouselitem;