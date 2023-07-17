import React from "react";
import './ContactStyle.css'
import { CiLocationOn,CiMobile4,CiMail } from "react-icons/ci";

const Contact = () => {

    return (
        <section className="Contact">
            <div className="row contacthead">
                <h4>CONTACT</h4>
                <h1>CONTACT US</h1>
            </div>
            <div className="row contactitems">
                <div className="col-12 d-flex">
                    <div className="col-4">
                    <div className="d-flex contacticon"><CiLocationOn/><h2>Location:</h2></div>
                        <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                    <div className="col-8 d-flex">
                        <div className="col-6 name"><input type="text" placeholder="Your Name" /> </div>
                        <div className="col-6 email"><input type="text" placeholder="Your Email" />  </div>
                    </div>
                </div>
                <div className="col-12 d-flex ">
                    <div className="col-4">
                      <div className="d-flex contacticon"><CiMail/><h2>Email:</h2></div>
                        <p>info@example.com</p>
                    </div>
                    <div className="col-8 d-flex">
                        <input type="text" placeholder="Subject" />
                    </div>
                </div>
                <div className="col-12 d-flex">
                    <div className="col-4">
                    <div className="d-flex contacticon"> <CiMobile4/> <h2>Call:</h2></div>
                        <p>+1 5589 55488 55s</p>
                    </div>
                    <div className="col-8 d-flex message">
                        <input type="text" placeholder="Message" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 inputbutton">
            <button type="button">Send Message</button>
            </div>
            </div>
        </section>
    )
}
export default Contact;