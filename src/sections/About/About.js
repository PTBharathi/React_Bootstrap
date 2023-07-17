import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutStyle.css'
import AboutImage from '../../assets/Images/About/AboutImage.jpg'
import { BsCheck2All } from "react-icons/bs";
import Carouselitem from "./Carousel";
import AboutFooder from "./AboutFooter";
import AOS from 'aos'
import 'aos/dist/aos.css'


const About = () => {

    AOS.init();
    return (
        <section className="about">
            <div className="row AboutContainer">
                    <div className="col-12 col-sm-12 col-mx-12 col-lg-6 col-xl-6" data-aos="fade-right" data-aos-duration="3000">
                        <h1>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p><BsCheck2All/>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p><BsCheck2All/>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                        <p><BsCheck2All/>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                    </div>
                    <div className="col-12 col-sm-12 col-mx-12 col-lg-6 col-xl-6 " data-aos="fade-left" data-aos-duration="3000">
                        <img className="AboutImage" src={AboutImage} alt=""/>
                    </div>
                </div>
                <div className="row containerCarousel" data-aos="zoom-in" data-aos-duration="3000">
                    <div className="col-12">
                        <Carouselitem/>
                    </div>
                </div>
                <AboutFooder/>
        </section>
    )
}
export default About;