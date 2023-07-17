import React from "react";
import './ServicesStyle.css';
import ServiceCard from "../../Components/ServiceCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbBrandGoogleAnalytics,TbBrandGooglePodcasts,TbDeviceDesktopAnalytics,TbFolder,TbInbox,TbLayersSubtract } from "react-icons/tb";


const Services=()=>{
    
    return(
    <section className="Services" data-aos="fade-up" data-aos-duration="3000">
        <div>
            <h5 className="ServiceHead">SERVICES</h5>
            <h4>CHECK OUR SERVICES</h4>
        </div>
        <div className="row servicecartitems ">
            <div className="row CardPadding">
            <ServiceCard icon={<TbBrandGoogleAnalytics/>} head="Lorem Ipsum" desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>
            <ServiceCard icon={<TbBrandGooglePodcasts/>} head="Lorem Ipsum" desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>
            <ServiceCard icon={<TbDeviceDesktopAnalytics/>} head="Lorem Ipsum" desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>
            <ServiceCard icon={<TbFolder/>} head="Lorem Ipsum" desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>
            <ServiceCard icon={<TbInbox/>} head="Lorem Ipsum" desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>
            <ServiceCard icon={<TbLayersSubtract/>} head="Lorem Ipsum" desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>
            </div>
        </div>
    </section>
    
    )
}
export default Services;