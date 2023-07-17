import React from "react";
import './PortfolioStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolioimg from '../../assets/Images/Portfolio/Portfolioimage.jpg'
import { BsEmojiSmile,BsFillBarChartFill,BsFillBookFill,BsFillBookmarkStarFill} from "react-icons/bs";
import Portfoliocard from "../../Components/PortfolioCard";

const Portfolio=()=>{
    return(
        <section className="Portfolio">
    <div className="row" data-aos="fade-up" data-aos-duration="3000">
        <div className="col-12 Portfoliohead">
        <h5>PORTFOLIO</h5>
        <h1>CHECK OUR PORTFOLIO</h1>
        </div>
    </div>
    <div className="row portfoliocontent">
        <div className="col-12 col-sm-12 col-mx-12 col-lg-12 col-xl-6  portfolioOne" data-aos="fade-up-right" data-aos-duration="3000">
            <img src={Portfolioimg} alt="PortfolioImage"/>
        </div>
        <div className="col-12 col-sm-12 col-mx-12 col-lg-12 col-xl-6 mt-3 portfolioTwo"  data-aos="fade-up-left" data-aos-duration="3000">
            <h1>Voluptatem dignissimos provident quasi</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
            <div className="row">
               <Portfoliocard icon={<BsEmojiSmile/>} head="65" strong="Happy Clients" des="consequuntur voluptas nostrum aliquid ipsam architecto ut."/> 
               <Portfoliocard icon={<BsFillBarChartFill/>} head="65" strong="Happy Clients" des="consequuntur voluptas nostrum aliquid ipsam architecto ut."/> 
               <Portfoliocard icon={<BsFillBookFill/>} head="65" strong="Happy Clients" des="consequuntur voluptas nostrum aliquid ipsam architecto ut."/> 
               <Portfoliocard icon={<BsFillBookmarkStarFill/>} head="65" strong="Happy Clients" des="consequuntur voluptas nostrum aliquid ipsam architecto ut."/> 
            </div>
        </div>
    </div>
    </section>
    )
}
export default Portfolio;