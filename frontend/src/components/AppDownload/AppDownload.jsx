import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';


const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br />TastePerfect App</p>
        <div className="app-download-platforms">
         <Link to="https://play.google.com/store/apps" target='_blank'> <img  src={assets.play_store} alt="" /></Link>
         <Link to="https://www.apple.com/in/app-store/" target='_blank'><img src={assets.app_store} alt="" /></Link>
        </div>
    </div>
  )
}

export default AppDownload
