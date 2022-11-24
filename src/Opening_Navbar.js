import React from 'react'
import "./Opening_Navbar.css"
import {Link} from "react-router-dom";
function Opening() {
  return (
    <open className="nav-items">
        <img src="./travel.jpg"  height= "60px" width= "60px" className = "nav-logo" />
        <h2 className='nav-toel'>Toel</h2>
        <h3 className='nav-title'>Exclusively for Travel Enthusiast</h3>
        <button className='nav-signup'>Signup</button>
        <button className='nav-login'><Link to="/home">Login</Link></button>
    </open>
  )
}

export default Opening

