import React from "react";
// import '../Portfolio/PortfolioStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfoliocard=({icon,head,strong,des})=>{

    return( <div className="col-6 col-sm-12 col-mx-12 col-lg-6 col-xl-6 mt-5" >
                    <h1 className="portfolioicons">{icon} {head}</h1>
                    <p className="mx-4"><strong>{strong} </strong>{des}</p>
                </div>
    )
}
export default Portfoliocard;