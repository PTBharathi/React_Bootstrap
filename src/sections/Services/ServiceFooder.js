import React from "react";
import './ServiceFooder.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceFooder=()=>{
    return(
        <section className="ServiceFooder">
            <div className="row ServiceFooderText d-flex">
          <div className="col-12 foodertext "  data-aos="zoom-in" data-aos-duration="1000">
            <h1 >Call To Action</h1>
            <h5>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
           <button className="servicebutton" type="Button">Call To Action</button>
          </div>
            </div>
        </section>
    )
}
export default ServiceFooder;