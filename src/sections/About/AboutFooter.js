import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutStyle.css'
import AboutImage from '../../assets/Images/About/AboutFooderImage.png'
import { SiDatabricks, SiEnvoyproxy, SiPulumi, SiQuasar } from "react-icons/si";

const AboutFooder = () => {

    return (
        <section className="AboutFooder">
            <div className="row">
                <div className="col-12 col-sm-12 col-mx-6 col-lg-6 col-xl-6 Fooder-one mb-2"data-aos="zoom-in-right" data-aos-duration="3000" >
                    <img src={AboutImage} alt="AboutFooderImage" />
                </div>
                <div className="col-12 col-sm-12 col-mx-6 col-lg-6 col-xl-6 Fooder-two" data-aos="fade-up-left" data-aos-duration="3000">
                    <div className="AboutFooderText d-flex">  
                    <SiDatabricks />
                        <div>
                            <h3>Est labore ad</h3>
                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div></div>
                    <div className="AboutFooderText d-flex">   
                    <SiEnvoyproxy />
                        <div>
                            <h3>Harum esse qui</h3>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div></div>
                    <div className="AboutFooderText d-flex">
                        <SiPulumi />
                        <div>
                            <h3>Aut occaecati</h3>
                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                        </div></div>
                    <div className="AboutFooderText d-flex">
                        <SiQuasar />
                        <div>
                            <h3>Beatae veritatis</h3>
                            <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                        </div></div>
                </div>
            </div>
        </section>
    )
}
export default AboutFooder;