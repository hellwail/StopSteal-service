import React from "react";
import "./footer.scss";
import "../header/header.scss";
import Call from "../../assets/phone-call-icon.svg";
import Telegram from "../../assets/icons8-telegram.svg";
import Vk from "../../assets/icons8-vk-circled.svg";
import Mail from "../../assets/mail-svgrepo-com.svg";

const Footer = () => {
  return (
    <div className="footer header">
      <p>&copy;Denis Ivanov 2023</p>
      <div className="contacts">
        <span>Связаться с нами:</span>
        <a href="tel:+79999999999"><img src={Call}/></a>
        <a href="mailto:sdfsdf@gmail.com"><img src={Mail}/></a>
        <a href="#"><img src={Telegram}/></a>
        <a href="#"><img src={Vk}/></a>
      </div>
    </div>
  )
}

export default Footer;