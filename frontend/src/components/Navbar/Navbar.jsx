import React from 'react'
import './Navbar.css'
import { assets } from '../../Assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* import the logo image from the asset.js folder */}
      <img src={assets.logo} alt="" className="logo" />

      {/* create the navigation bar */}
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact Us</li>
      </ul>

      {/* import the search icon and basket icon from the assets folder */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />

            <div className="dot">

            </div>
        </div>

        {/* create the button tag */}
        <button>Sign-in</button>

      </div>
    </div>
  )
}

export default Navbar
