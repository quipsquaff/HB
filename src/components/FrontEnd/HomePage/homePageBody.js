import React from 'react'
import './homePageBody.css'
import img1 from '../../../assets/photos/bill-nino-2PvQq4W6KYc-unsplash.jpg'
import img2 from '../../../assets/photos/tatiana-rodriguez-zFBbQ2X45m0-unsplash.jpg'

function HomePageBody()  {
  return(
  <div className = "mainDiv">
    <img className = "img1" src = {img1}/>
    <img className = "img2" src = {img2}/>


  </div>
  )
}

export default HomePageBody
