import React from 'react'
import ProfileCardImg from '../assets/profileCard.png'
import './profileCard.css'
// import './responsive-updates.css'


function ProfileCard() {
  return (
    <div className = 'profileCard-mn-cls'>
        <img src = {ProfileCardImg} alt = "profileCard-img" className = 'profileCard-img-cls'></img>
    </div>
  )
}

export default ProfileCard