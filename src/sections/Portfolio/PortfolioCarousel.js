import React from "react"
import {MDBCarousel, MDBCarouselItem,} from 'mdb-react-ui-kit';
import Porfile from '../../assets/Images/Portfolio/folioImage/Bharathi.jpeg'

const PortfolioCarousel=()=>{
  return (

    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem 
        className='w-100 d-block'
        itemId={1}>
    <img className="Profile" src={require("../../assets/Images/Portfolio/folioImage/Bharathi.jpeg")} alt="Portfoilo"data-aos="zoom-in" data-aos-duration="3000" />
        <h5 className="headfive"data-aos="zoom-in" data-aos-duration="3000">First slide label</h5>
        <p className="para"data-aos="zoom-in" data-aos-duration="3000">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
      >
        <img className="Profile"  src={require("../../assets/Images/Portfolio/folioImage/PM.jpg")} alt="Portfoilo" data-aos="zoom-in" data-aos-duration="3000"/>
        <h5 className="headfive" data-aos="zoom-in" data-aos-duration="3000">PM</h5>
        <p className="para" data-aos="zoom-in" data-aos-duration="3000">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
      >
        <img className="Profile" src={Porfile} alt="Portfoilo" data-aos="zoom-in" data-aos-duration="3000"/>
        <h5 className="headfive" data-aos="zoom-in" data-aos-duration="3000">Third slide label</h5>
        <p className="para" data-aos="zoom-in" data-aos-duration="3000">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
export default PortfolioCarousel;