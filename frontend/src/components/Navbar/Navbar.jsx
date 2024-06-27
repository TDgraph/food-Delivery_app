import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../Assets/assets'

const Navbar = () => {

    // create the state variable
    const [menu, setMenu] = useState("menu");
  return (
    <div className='navbar'>
        {/* import the logo image from the asset.js folder */}
      <img src={assets.logo} alt="" className="logo" />

      {/* create the navigation bar */}
      <ul className="navbar-menu">

      {/* add the onclick menu to enable the underline feature move between the menu button when being clicked */}
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
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
