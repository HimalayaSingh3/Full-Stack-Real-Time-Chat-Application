import React from 'react'
import './RightBar.css'
import profile from "./images/profile_alison.png"
import dot from "./images/green_dot.png"
import pic1 from "./images/pic1.png"
import pic2 from "./images/pic2.png"
import pic3 from "./images/pic3.png"
import pic4 from "./images/pic4.png"


const RightBar = () => {
  return (
    <div className='right'>
      <div className="right-profile">
        <img src={profile} alt="" />
        <h3>Kalpna Singh <img src={dot} alt="" /></h3>
        <p>Hey, There i am Kalpna Singh using chat app.</p>
      </div>
      <hr/>
      <div className="right-media">
        <p>Media</p>
        <div>
          <img src={pic1} alt="" />
          <img src={pic2} alt="" />
          <img src={pic3} alt="" />
          <img src={pic4} alt="" />
          <img src={pic1} alt="" />
          <img src={pic2} alt="" />
        </div>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default RightBar
