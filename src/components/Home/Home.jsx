import React, { useEffect, useState } from 'react'
import './home.css'
import Aos from 'aos';
import "aos/dist/aos.css"
// import video1 from 'react-icons/bi'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import video2 from "../../Assets/video2.mp4"
const Home = () => {
  const [price, setPrice] = useState(5080)

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video2} muted autoPlay loop type='video2/mp4'></video>

      <div className='homeContent container'>
        <div className="textDiv">
          <span data-aos="fade-up"
            className='smallText'>
            Our Packages
          </span>
          <h1 data-aos="fade-up"
            className='homeTitle'>Search your holiday</h1>
        </div>
        <div data-aos="fade-up"
          className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor='city' style={{ fontSize: "20px" }}>search your destination:</label>
            <div className="input flex">
              <input type='text' placeholder='Enter name here...' />
              <GrLocation className='icon' />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor='date' style={{ fontSize: "20px" }}>select your date:</label>
            <div className="input flex">
              <input type='date' />
              <GrLocation className='icon' />
            </div>
          </div>
          <div className="destinationInput">
            <div className="label_total flex">
              <label htmlFor='price' style={{ fontSize: "20px" }}>max price:</label>
              <h3 className='total'>${price}</h3>
            </div>

            <div className="input flex">
              <input type='range' max="5000" min="1000" onChange={handlePrice} />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className='icon' />
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div data-aos="fade-up"
          className="homeFooterIcons">
          <div className="rightIcons">
            <FiFacebook className='icon' style={{ color: "grey" }} />
            <FaInstagram className='icon' style={{ color: "grey" }} />
            <FaTripadvisor className='icon' style={{ color: "grey" }} />
          </div>
          <div className="leftIcons">
            <FaTripadvisor className='icon' style={{ color: "grey" }} />
            <FaListUl className='icon' style={{ color: "grey" }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home