import React from 'react'
import logo from '../../Components/images/NetflixLogo.svg'
import './login.scss'
const Login = () => {

    return (
        <div className='login' >
            <div className='top'>
                <div className="wrapper">
                    <img src={logo} className='logo' />
                </div>
            </div>
            <div className="container">
               <form >
               <h1>Sign In</h1>
               <input type="emial" placeholder='Email or Phone number'/>
               <input type="password" placeholder='Password' />
               <button className='loginButton'>Sign In</button>
               <span>New to Netflix? <b>Sign Up Now.</b></span>
               <small>
                This page is protected by Google reCAPTCHA to ensure you're not a bot . 
                <b>Learn more</b>
               </small>
               </form>
            </div>
        </div>
    )
}

export default Login
