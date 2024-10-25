import React from 'react'
import "./ChatBox.css"
import profile from "./images/profile_alison.png"
import dot from "./images/green_dot.png"
import help from "./images/help_icon.png"
import gallery from "./images/gallery_icon.png"
import send from "./images/send_button.png"
import pic1 from "./images/pic1.png"

const ChatBox = () => {
  return (
    <div className="chat-box" >
      <div className="chat-user">
        <img src={profile} alt="" />
        <p>Kalpna Singh<img className='dot' src={dot} alt="" /></p>
        <img src={help} alt="" className='help'/>
      </div>

      <div className="chat-msg">
        <div className="s-msg">
          <p className='msg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <div>
             <img src={profile} alt="img" />
             <p>2:30 PM</p>
           </div>
         </div>
         <div className="s-msg">
          <img className="msg-img" src={pic1} alt="" />
          <div>
             <img src={profile} alt="img" />
             <p>2:30 PM</p>
           </div>
         </div>
         <div className="r-msg">
          <p className='msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
             <img src={profile} alt="img" />
             <p>2:30 PM</p>
           </div>
         </div>
        </div>
        


      <div className="chat-input">
        <input type="text" placeholder='Send a message' />
        <input type="file" id="image" accept='images/png, images/jpeg' hidden />
        <label htmlFor="image">
          <img src={gallery} alt="gallery" />
        </label>
        <img src={send} alt="send" />
      </div>
    </div>
  )
}

export default ChatBox
