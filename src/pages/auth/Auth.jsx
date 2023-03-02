import React from 'react'
import './Auth.css';
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt='' />
            <div className="WebName">
                <h1>Team UNITE</h1>
                <h6>Explore the ideas throughout the world!</h6>
            </div>
        </div>
        <Signup />
    </div>
  )
}

function Signup(){
    return (
        <div className="a-right">
            <form className="InfoForm AuthForm">
                <h3>Sign up</h3>
                <div>
                    <input type='text' placeholder='First Name' className='InfoInput' name='firstName' />
                    <input type='text' placeholder='Last Name' className='InfoInput' name='lastName' />
                </div>
                <div>
                    <input type="text" className="InfoInput" name='username' placeholder='Username' />
                </div>
                <div>
                    <input type="text" className="InfoInput" placeholder='Password' name='password' />
                    <input type="text" className="InfoInput" placeholder='Confirm Password' name='confirmPass' />
                </div>
                <div>
                    <span>Already have an account. Login</span>
                </div>
                <button className='button InfoButton' type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Auth