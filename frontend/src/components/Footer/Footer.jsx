import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              <div className="footer-social-icons">
                <Link to="https://www.facebook.com/login/" target='_blank'><img src={assets.facebook_icon} alt="" /></Link>
                <Link to="https://x.com/?lang=en" target='_blank'><img src={assets.twitter_icon} alt="" /></Link>
                <Link to="https://www.linkedin.com/" target='_blank'><img src={assets.linkedin_icon} alt="" /></Link>
              </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 8785483890</li>
                    <a href="mailto:https://mail.google.com/"><li>contact@tasteperfect.com</li></a>
                </ul>
            </div>
        </div>
        <hr />
      <p className="footer-copyright">Copyright 2024 @ TastePerfect.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
