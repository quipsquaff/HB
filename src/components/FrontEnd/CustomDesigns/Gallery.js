import React from 'react'
import './Gallery.css'
//
import img1 from '../../../assets/photos/6bQSZQ1.jpg'
import img2 from '../../../assets/photos/rebel.jpg'
import img3 from '../../../assets/photos/apocalypse.jpg'
import img4 from '../../../assets/photos/archer.jpg'
import img5 from '../../../assets/photos/armagedda.jpg'
import img6 from '../../../assets/photos/CA.jpg'
import img7 from '../../../assets/photos/chtulu.jpg'
import img8 from '../../../assets/photos/futurama.jpg'
import img9 from '../../../assets/photos/futurama2.jpg'
import img10 from '../../../assets/photos/hellfish.jpg'
import img11 from '../../../assets/photos/Monarch.jpg'
import img12 from '../../../assets/photos/punisher.jpg'
import img13 from '../../../assets/photos/RobotDevil.jpg'
import img14 from '../../../assets/photos/StormTrooper.jpg'






function Gallery()  {
  return(
  <div className = "galleryContainer">
   <div>   
    <img src = {img1}/>
    <img src = {img2}/>
    <img src = {img3}/>
    <img src = {img4}/>
    <img src = {img5}/>
    <img src = {img6}/>
    <img src = {img7}/>
    <img src = {img8}/>
    <img src = {img9}/>
    <img src = {img10}/>
    <img src = {img11}/>
    <img src = {img12}/>
    <img src = {img13}/>
    <img src = {img14}/>
   </div>
  </div>
  )
}

export default Gallery