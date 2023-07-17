import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceCard=({icon,head,desc})=>{
    return(
 <div id="ServiceCard" className="col-12 row-sm-12 col-mx-5 col-lg-5 col-xl-3" data-aos="zoom-in" data-aos-duration="3000">
  <h1 className="CardIcon">{icon}</h1>
   <h6 className="CardHead">{head}</h6>
   <p>{desc}</p>
 </div>
    )
}
export default ServiceCard;