import React from "react";
import Container from "../../Components/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeStyle.css';
import { SiBackblaze,SiChinaeasternairlines,SiDirectus,SiFalcon,SiFauna } from "react-icons/si";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    AOS.init();
    return (
      <section className="Home">
        <div>
        <div className="justify-content-center HeadText row" data-aos="fade-up"   data-aos-duration="3000">
            <h1 className="col-12 row-sm-6 col-mx-12 col-lg-12 col-xl-12">Powerful Digital</h1>
            <h1 className="col-12 row-sm-6 col-mx-12 col-lg-12 col-xl-12">Solutions With </h1>
            <p>We are theam of talented digital marketers</p>
        </div>
        </div>
        <div className="row HomeCard">
            <div className="row d-flex justify-content-center"  data-aos="fade-up"   data-aos-duration="3000">
                <Container className="HomeHover" icon={<SiBackblaze/>} tittle="Lorem Ipsum" />
                <Container className="HomeHover" icon={<SiChinaeasternairlines/>} tittle="Dolor Sitema" />
                <Container className="HomeHover" icon={<SiDirectus/>} tittle="Sedare Perspiciatis" />
                <Container className="HomeHover" icon={<SiFalcon/>} tittle="Magni Dolores"/>
                <Container className="HomeHover" icon={<SiFauna/>} tittle="Nemos Enimade"/>
            </div>
        </div>
        </section>
    )
}
export default Home;