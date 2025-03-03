import React, { useState } from "react";
import emailjs from "emailjs-com";
import mailIcon from "../assets/images/mail-icon.svg";
import twitterIcon from "../assets/images/twitter-icon.svg";
import instagramIcon from "../assets/images/instagram-icon.svg";
import linkedInIcon from "../assets/images/linkedin-icon.svg";
import facebookIcon from "../assets/images/facebook-icon.svg";
import copyrightIcon from "../assets/images/copyright-icon.svg";
import "../styles/Footer.scss";

const serviceID = "service_r3l0b3g";
const userTemplateID = "template_73prb4h";
const adminTemplateID = "template_8ve6klf";
const userID = "26j081Qf74yIvihDy";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const sendEmails = () => {
    if(!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const userEmailParams = {
      to_name: email,
      message: "Thank you for subscribing to our newsletter! 🎉",
    };

    const adminEmailParams = {
      user_email: email,
    };

    emailjs
      .send(serviceID, userTemplateID, userEmailParams, userID)
      .then(() => {
        return emailjs.send(serviceID, adminTemplateID, adminEmailParams, userID);
      })
      .then(() => {
        setSuccess("Thank you for subscribing!");
        setEmail("");
        setTimeout(() => setSuccess(""), 2000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setError("Failed to send email. Please try again later.");
        setTimeout(() => setError(""), 2000);
      });
  };

  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__company-about-wrapper">
          <div className="footer__content__company-info">
            <h3 className="h3">STUDIODUMIN</h3>
            <p className="p2">
              An interior agency plays a crucial role in transforming interior
              spaces into functional, aesthetically pleasing, and personalized
              environments.
            </p>
          </div>
          <div className="footer__content__about">
            <p className="p1">About Us</p>
            <p className="p2">Our History</p>
            <p className="p2">Why Us</p>
            <p className="p2">Our Users</p>
            <p className="p2">Our Values</p>
          </div>
        </div>
        <div className="footer__content__newsletter">
          <p className="p1">Newsletter - Sign up</p>
          <p className="p1">
            Subscribe to our newsletter to receive updates on the latest news!
          </p>
          <div className="footer__content__newsletter__input-group">
            <input
              type="text"
              placeholder="Your Email"
              className="p1"
              value={email}
              onChange={handleInputChange}
            />
            <button onClick={sendEmails} disabled={!email.trim()}>
              <img src={mailIcon} alt="Mail" />
            </button>
          </div>
          {error && <p className="p2">{error}</p>}
          {success && <p className="p2">{success}</p>}
        </div>
      </div>
      <div className="footer__social">
        <div className="footer__social__icons">
          <div className="footer__social__icon__wrapper">
            <img src={twitterIcon} alt="Twitter" />
          </div>
          <div className="footer__social__icon__wrapper">
            <img src={instagramIcon} alt="Instagram" />
          </div>
          <div className="footer__social__icon__wrapper">
            <img src={linkedInIcon} alt="LinkedIn" />
          </div>
          <div className="footer__social__icon__wrapper">
            <img src={facebookIcon} alt="Facebook" />
          </div>
        </div>
        <div className="footer__social__copyright">
          <img src={copyrightIcon} alt="Copyright" />
          <p className="p2">2024 STUDIODUMIN. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
