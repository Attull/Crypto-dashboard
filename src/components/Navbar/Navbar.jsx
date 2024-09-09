import React from 'react'
import "./Navbar.css"
import logo from "../../assets/cryptocurrency.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" height={40} />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
                <option value="eur">EUR</option>
            </select>
            <button>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar