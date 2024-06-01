import React, { useEffect } from 'react'
import "./main.css"
import Aos from 'aos';
import "aos/dist/aos.css"
import photo2 from "../../Assets/photo2.jpg"
import photo3 from "../../Assets/photo3.jpg"
import photo4 from "../../Assets/photo4.jpg"
import photo5 from "../../Assets/photo5.jpg"
import photo6 from "../../Assets/photo6.jpg"
import photo7 from "../../Assets/photo7.jpg"
import photo8 from "../../Assets/photo8.jpg"
import photo9 from "../../Assets/photo9.jpg"
import photo1 from "../../Assets/photo1.jpg"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaClipboardCheck } from "react-icons/fa";
 const Data=[
  {
    id:1,
    imgSrc:photo1,
    destTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAx",
    fess:"$700",
    descrition:"the option of ronance ,Bra BOra is one of the best travel description in the world. this place is know for its luxurious stays and adventurous activities. " 
   },
  {
   id:1,
   imgSrc:photo2,
   destTitle:"Bora Bora",
   location:"New Zealand",
   grade:"CULTURAL RELAx",
   fess:"$700",
   descrition:"the option of ronance ,Bra BOra is one of the best travel description in the world. this place is know for its luxurious stays and adventurous activities. " 
 },
  {
    id:1,
    imgSrc:photo3,
    destTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAx",
    fess:"$700",
    descrition:"the option of ronance ,Bra BOra is one of the best travel description in the world. this place is know for its luxurious stays and adventurous activities. " 
   },
   {
    id:1,
    imgSrc:photo4,
    destTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAx",
    fess:"$700",
    descrition:"the option of ronance ,Bra BOra is one of the best travel description in the world. this place is know for its luxurious stays and adventurous activities. " 
   },
   {
    id:1,
    imgSrc:photo5,
    destTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAx",
    fess:"$700",
    descrition:"the option of ronance ,Bra BOra is one of the best travel description in the world. this place is know for its luxurious stays and adventurous activities. " 
   },
   {
    id:1,
    imgSrc:photo6,
    destTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAx",
    fess:"$700",
    descrition:"the option of ronance ,Bra BOra is one of the best travel description in the world. this place is know for its luxurious stays and adventurous activities. " 
   },
   {
    id:1,
    imgSrc:photo7,
    destTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAx",
    fess:"$700",
    descrition:"the option of ronance ,Bra BOra is one of the best travel description in the world. this place is know for its luxurious stays and adventurous activities. " 
   },
   {
    id:1,
    imgSrc:photo8,
    destTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAx",
    fess:"$700",
    descrition:"the option of ronance ,Bra BOra is one of the best travel description in the world. this place is know for its luxurious stays and adventurous activities. " 
   },
   {
    id:1,
    imgSrc:photo9,
    destTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAx",
    fess:"$700",
    descrition:"the option of ronance ,Bra BOra is one of the best travel description in the world. this place is know for its luxurious stays and adventurous activities. " 
   },
   
   


]
const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='main container section' >
<div className="secTitle">
  <h3 data-aos="fade-right" className='title'>
    Most visited destinations
  </h3>
</div>
<div className="secContent grid">
{Data.map(({id,imgSrc,fess,grade,destTitle,location,descrition})=>{
  return(
    <div key={id}
    data-aos="fade-up"
     className="singleDestination">
<div className="imgeDiv">
  <img src={imgSrc} alt={destTitle}/>
</div>
<div className="cardInfo">
  <h4 className='destTitle'>{destTitle}</h4>
<span className='continent flex'>
<HiOutlineLocationMarker  className='icon'/>
<span className="name">{location}</span>
</span>
<div className="fess flex">
  <div className="grade">
    <span>{grade}<small>+1</small></span>
  
  </div>
  <div className="price">
    <h5>{fess}</h5>
  </div>
</div>
<div className="desc">
  <p>{descrition}</p>
</div>
<button className='btn flex'>
  DETAILS<FaClipboardCheck />
</button>

</div>
    </div>
  )
})}
</div>
    </section>
  )
}

export default Main