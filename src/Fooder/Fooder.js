import React from "react";
import './FooderStyle.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Fooder=()=>{

    return(
        <div>
<div className="Fooder">
<div className="FooderRow row d-flex">
<div className=" col-sm-12 col-mx-6 col-lg-5 col-xl-2">
<div className=" d-flex"><h1>GP</h1><h2>.</h2></div>
<p className="FooderAddress">A108 Adam Street<br/>NY 535022, USA</p>
<div className="FooderContact">
<div><h5>Phone:</h5><p>+1 5589 55488 55</p></div>
<div><h5>Email:</h5><p>info@example.com</p></div>
</div>
</div>
<div className="FooderRow FooderColumn col-sm-12 col-mx-6 col-lg-5 col-xl-2"><div className="FooderRowHead"><h5>Useful Links</h5>
<div className="Fooderlink">
<a href="#"><MdOutlineKeyboardArrowRight/>Home</a>
<a href="#"><MdOutlineKeyboardArrowRight/>About us</a>
<a href="#"><MdOutlineKeyboardArrowRight/>Services</a>
<a href="#"><MdOutlineKeyboardArrowRight/>Terms of service</a>
<a href="#"><MdOutlineKeyboardArrowRight/>Privacy policy</a>
</div></div>
</div>
<div className="FooderRow FooderColumn col-sm-12 col-mx-6 col-lg-5 col-xl-2"><div className="FooderRowHead"><h5>Our Services</h5>
<div className="Fooderlink">
<a href="#"><MdOutlineKeyboardArrowRight/>Web Design</a>
<a href="#"><MdOutlineKeyboardArrowRight/>Web Development</a>
<a href="#"><MdOutlineKeyboardArrowRight/>Product Management</a>
<a href="#"><MdOutlineKeyboardArrowRight/>Marketing</a>
<a href="#"><MdOutlineKeyboardArrowRight/>Graphic Design</a>
</div></div>
</div>
<div className="FooderRow FooderColumn lastfooder col-sm-12 col-mx-6 col-lg-5 col-xl-2">
<div className="FooderRowHead"><h5>Our Newsletter</h5>
<div className="Fooderlink">
<p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
<div className="fooderbutton d-flex"><input type="text" placeholder=""/><button type="button">Subscribe</button> </div>
</div></div>
</div>
</div>
</div>
<div className="row FooderCopyright">
    <h6>© Copyright React-Bootstrap. All Rights Reserved</h6>
    <p>Designed by <a href="https://www.linkedin.com/in/bharathithangaraj">Bharathi Thangaraj</a></p>
</div>
</div>
)
}
export default Fooder;