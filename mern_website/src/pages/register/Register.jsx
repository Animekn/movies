import React, { useState, useRef } from 'react'
import logo from '../../Components/images/NetflixLogo.svg'
import './register.scss'
const Register = () => {

    // we will use use state to store email addresses on clicking get started 

    const[email, setEmail] = useState('')
    
    const[password, setPassword] = useState('')

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    
    const handleFinish=()=>{
        setPassword(passwordRef.current.value)
    }
    return (
        <div className='register' >
            <div className='top'>
                <div className="wrapper">
                    <img src={logo} className='logo' />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies,Tv shows, and more.</h1>
                <h2>Watch anywhere. Cancle anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                {/*if emial input is empty then show the input element to the user*/}
                {
                    !email ? (
                        <div className="input">
                            <input type="email" placeholder='email address' ref={emailRef} />
                            <button className='registerButton' onClick={handleStart}>Get Started</button>
                        </div>
                    )
                    :
                    (
                        <form className="input">
                            <input type="password" placeholder='password' ref={passwordRef} />
                            <button className='registerButton' onClick={handleFinish}>Start Membership</button>
                        </form>
                    )
                    }
            </div>
        </div>
    )
}

export default Register
