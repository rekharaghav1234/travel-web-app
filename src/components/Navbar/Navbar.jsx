import React, { useState } from 'react'
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import './navbar.css'
const Navbar = () => {
    const[active,setActive]=useState("navbar")
    const showNav=()=>{
        setActive("navbar activeNavbar")
}
const removeNavbar=()=>{
    setActive("navbar ")
}
  return (
   <section className='navBarSection'>
<header className='header flex'>
<div className='logoDiv'>
     <a href='/'  className='logo'>
     <h1><MdTravelExplore  className="icon"/>Travel.</h1>   
    </a>
</div>
<div className={active}>
    <ul className='navlist flex'>
        <li className='navItem'>
             <a href='/'  className='navLink'>Home</a>
        </li>
        <li className='navItem'>
             <a href='/'  className='navLink'>Packages</a>
        </li>
        <li className='navItem'>
             <a href='/'  className='navLink'>shop</a>
        </li>
        <li className='navItem'>
             <a href='/'  className='navLink'>pages</a>
        </li>
        <li className='navItem'>
             <a href='/'  className='navLink'>Contact</a>
        </li>
        <button className='btn' > <a href='/'>Book now</a></button>
    </ul>
    <div  onClick={removeNavbar} className='closeNavbar'><IoIosCloseCircle /></div>
</div>
<div onClick={showNav} className='toggleNavbar'>
<TbGridDots className='icon' /> 
</div>
</header>
   </section>
  )
}

export default Navbar
