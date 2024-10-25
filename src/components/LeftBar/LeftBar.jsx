import React from 'react'
import './LeftBar.css'
import logo from './images/logo.png'
import menu from './images/menu_icon.png'
import profile from './images/profile_richard.png'
import search from './images/search_icon.png'

const LeftBar = () => {
  return (
    <div className='ls'>
      <div className="ls-top">
        <div className="ls-nav">
          <img src={logo} alt="" />
          <div className="menu">
            <img src={menu} alt="" />
            <div className="sub-menu">
              <p>Edit profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <img src={search} alt="" />
          <input type="text" placeholder='Search here...' />
        </div>
      </div>
      <div className="ls-list">
        {Array(12).fill("").map((item,index)=>(
          <div key={index} className="friends">
          <img src={profile} alt="" />
          <div>
            <p>Alo</p>
            <span>Hello, How are you?</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default LeftBar
