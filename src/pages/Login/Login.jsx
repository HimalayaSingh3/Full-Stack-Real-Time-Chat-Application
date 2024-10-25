import React, { useState } from 'react'
import './Login.css'
import chat from './images/chat.png'

const Login = () => {

  const [currentState,setCurrentState]=useState("Sign up");
  return (
    <div className='login'>
      <img src={chat} alt="" />
      <form className='login-form'>
        <h2>{currentState}</h2>
        {currentState==="Sign up"?  <input type='text' placeholder='enter username' required className='form-input'></input>:null}
        <input type="email" placeholder='Email address' className='form-input'/>
        <input type='password' placeholder='password' className='form-input'></input>
        <button type="submit">{currentState==="Sign up"?"Create Account":"Login Now"}</button>
        <div className="login-term">
          <div>
          <input type="checkbox" />
          </div>
          <p>Agree to the terms of use & privacy policy</p>
        </div>
        <div className="login-forget">
          {
            currentState==="Sign up"
            ?<p className="login-toggle">Already have an account <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
            :<p className="login-toggle">Create an account <span onClick={()=>setCurrentState("Sign up")}>Create here</span></p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login
