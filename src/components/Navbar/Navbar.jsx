import React, { useContext } from 'react'
import "./Navbar.css"
import logo from "../../assets/cryptocurrency.png"
import { CoinContext } from '../../context/CoinContext'
import { useNavigate } from 'react-router'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)
  const navigate =  useNavigate()

  const currencyHandler = (val)=>{
      switch(val){
        case "usd":{
          setCurrency({
            name:"usd",
            symbol:"$"
          })
          break;
        }
        case "inr":{
          setCurrency({
            name:"inr",
            symbol:"₹"
          })
          break;
        }
      }
  }
  return (
    <div className='navbar'>
        <img  style={{cursor:"pointer"}} src={logo} alt="" height={40} onClick={()=> navigate("/")}/>
        <ul>
            <li onClick={()=> navigate("/")}>Home</li>
            <li>Features</li>
            <li onClick={()=> navigate("/histroy")}>Historical Data</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={(e)=>currencyHandler(e.target.value)}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar