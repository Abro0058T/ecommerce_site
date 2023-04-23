
import React, { Fragment } from 'react'
import './LoginSignup.css'
import Loader from '../layout/Loader/Loader'

function LoginSignup() {
  return (
    <Fragment>
        <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
                <div>
                    <div className="login_signUp_toggle">
                        <p onClick={(e)=> switchTabs(e,"login")}>LOGIN</p>
                        <p onClick={(e)=> switchTabs(e,"register")}>REGISTER</p>
                    </div>
                    <button ref={switcherTab}></button>
                </div>
                <form className='loginForm' ref={loginTab} onSubmit={loginSubmit}>
                    <div className="loginEmail">
                        <MailOutlineIcon/>
                        <input type="email"
                        placeholder='Email' 
                        required
                        value={loginEmail}
                        onChange={(e)=>setLoginEmail(e.target.value)}/>
                    </div>
                    <div className="loginPassword">
                        <LockOpenIcon/>
                        <input type="password"
                        placeholder='Password'
                        required 
                        value={loginPassword}
                        onChange={(e)=>setLoginPassword(e.target.value)}/>
                    </div>
                    <Link to="/password/forgot">Forgot Password ?</Link>
                    <input type="submit"  value="login" className='loginBtn'/>
                </form>
            </div>
        </div>
    </Fragment>
  )
}

export default LoginSignup

//7:30:01