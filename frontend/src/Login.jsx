import React from 'react'

import './SignupLogIn.css'
import {Link} from 'react-router-dom'

import email_icon from './assets/email.png'
import password_icon from './assets/password.png'

const Login = () => {
  return (

<div className='container'>
    <div className="header">
        <div className="text">Log In</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">

        <div className="input">
        <img src={email_icon} alt="" />
        <input type="email" placeholder='Email'/>
        </div>

        <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" placeholder='Password'/>
        </div>     
        </div>

        <div className="forgot-password">Forgot Password? <span>click here</span></div>
        <div className="submit-container">
        <Link to='register' className="submit">Sign Up</Link>
        <div className="submit">Login</div>
    </div>

</div>
  )
}

export default Login