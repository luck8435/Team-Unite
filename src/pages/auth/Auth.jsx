import React, { useState } from 'react'
import './Auth.css';
import Logo from '../../img/logo.png'
import {useDispatch} from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const dispatch = useDispatch();

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPass: ""
    });

    const [confirmPass, setConfirmPass] = useState(true);

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignUp){
            data.password === data.confirmPass ? dispatch(signUp(data)) : setConfirmPass(false);
        }
        else{
            dispatch(logIn(data));
        }
    }

    const resetForm = () => {
        setConfirmPass(true);
        setData({
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            confirmPass: ""
        })
    }

    return (
        <div className="Auth">
            {/* Left side */}
            <div className="a-left">
                <img src={Logo} alt='' />
                <div className="WebName">
                    <h1>Team UNITE</h1>
                    <h6>Explore the ideas throughout the world!</h6>
                </div>
            </div>
            {/* Right Side */}
            <div className="a-right">
            <form className="InfoForm AuthForm" onSubmit={handleSubmit}>
                <h3>{isSignUp ? "Sign Up": "Log In"}</h3>
                {isSignUp && 
                <div>
                    <input type='text' placeholder='First Name' className='InfoInput' name='firstName' value={data.firstName} onChange={handleChange} />
                    <input type='text' placeholder='Last Name' className='InfoInput' name='lastName' value={data.lastName} onChange={handleChange} />
                </div>
                }
                <div>
                    <input type="text" className="InfoInput" name='username' placeholder='Username' value={data.username} onChange={handleChange} />
                </div>
                <div>
                    <input type="password" className="InfoInput" placeholder='Password' name='password' value={data.password} onChange={handleChange} />
                    {isSignUp && <input type="password" className="InfoInput" placeholder='Confirm Password' name='confirmPass' value={data.confirmPass} onChange={handleChange} />}
                </div>
                <span style={{display: confirmPass? "none": "block", color: 'red', fontSize: '12px', alignSelf: 'flex-end', marginRight: '5px'}}>
                    * Confirm password does not match! 
                </span>
                <div>
                    <span style={{ fontSize: '12px', cursor:"pointer" }} onClick={() => {setIsSignUp((prev) => !prev); resetForm();}}>{isSignUp ? "Already have an account. Login!": "Don't have an account? Sign Up!"}</span>
                </div>
                <button className='button InfoButton' type='submit'>{isSignUp ? "Signup" : "Login"}</button>
            </form>
        </div>
        </div>
    )
}

export default Auth