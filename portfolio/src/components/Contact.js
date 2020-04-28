import React from "react";
import Email from "../images/email.png";
import Github from "../images/Github.png";
import LinkedIn from "../images/linkedin.png";

const Contact = () => {

    const emailAlert = () => {
        alert("Email: trodriguez89@gmail.com")
    }

    return (
        <div className="contact-main" id="contact">
            <div className="contact-title">
                <h1 className="contact-style">Contact</h1>
                <h3 className="contact-desc">Feel free to contact me for any further questions!</h3>
            </div>
            <div className="pic-main-contain">
                <div className="icon-pics">
                    <a href="https://github.com/trodriguez89"><img src={Github} /></a>
                </div>
                <div className="icon-pics" onClick={emailAlert}>
                    <a><img src={Email} /></a>
                </div>
                <div className="icon-pics">
                    <a href="https://www.linkedin.com/in/thomas-rodriguez-556859149/"><img src = {LinkedIn}/></a>
                </div>
            </div>

        </div>
    )
};

export default Contact;