import React, { useEffect } from 'react'
import "./footer.css"
import Aos from 'aos';
import "aos/dist/aos.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import video3 from "../../Assets/video3.mp4"
import { FiSend } from "react-icons/fi";
export const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='footer'>
<div className="videoDiv">
  <video src={video3} loop autoPlay muted type="video3/mp4"></video>
</div>
<div className="secContent container">
  <div className="contactDiv flex">
    <div data-aos="fade-up"
     className="text">
      <small>KEEP IN TOUCH</small>
    
    <h2>Travel with us</h2></div>
  
  <div className="inputDiv flex">
    <input type='text' placeholder='Enter Email Address'/>
    <button data-aos="fade-up"
    className='btn flex' type='submit'>
    SEND<FiSend  className='icon'/>
    </button>
    </div>
    </div>
    <div className="footerCard flex">
      <div className="footerIntro flex">
        <div className="logoDiv">
          <a   className='logo flex'>
          <MdTravelExplore  className='icon'/>Travel.
          </a>
        </div>
        <div className="footerparagraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum totam id ullam obcaecati voluptatum nesciunt minus qui eius autem, non maiores rem fugiat deleniti facere architecto! Tempora vel debitis nostrum.
        </div>
        <div data-aos="fade-up"
        className="footerSocial flex">
        <div><FaTwitter className='icon' /></div>
        <div><FaYoutube className='icon' /></div>
        <div><FaInstagram className='icon' /></div>
        <div><FaFacebookF className='icon' /></div>
        </div>
      </div>
    </div>
</div>
    </section>
  )
}
