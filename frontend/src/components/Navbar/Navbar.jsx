import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext);

   return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>Contact us</a>
        </ul>
        <div className="navbar-right">
          <div className='navbar-search-icon'>
          <img className="search-icon"src={assets.search_icon} alt="" />
          <input type="text" placeholder='Type "Salad" '/>
          </div>
            <div className="navbar-cart-icon">
            <Link to='/cart'><img className='cart-icon' src={assets.cart_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar