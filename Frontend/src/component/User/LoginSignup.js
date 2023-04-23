
import React, { Fragment ,useRef,useState} from 'react'
import './LoginSignup.css'
import Loader from '../layout/Loader/Loader'
import {Link} from "react-router-dom"
import { MdMailOutline ,MdLockOpen } from 'react-icons/md'

function LoginSignup() {
    const loginTab=useRef(null)
    const registerTab=useRef(null)
    const switcherTab=useRef(null)

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const loginSubmit=()=>{
        console.log("Form submited")
    }
    const switchTabs=(e,tab)=>{
        if(tab==="login"){
            switcherTab.current.classList.add("shiftToNeutral")
            switcherTab.current.classList.remove("shiftToRight")
            registerTab.current.classList.remove("shiftToNeutralForm")
            loginTab.current.classList.remove("shiftToLeft")
        }
        if(tab==="register"){
            switcherTab.current.classList.add("shiftToRight")
            switcherTab.current.classList.remove("shiftToNeutral")
            registerTab.current.classList.remove("shiftToNeutralForm")
            loginTab.current.classList.remove("shiftToLeft")
        }


    }

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
                        <MdMailOutline/>
                        <input type="email"
                        placeholder='Email' 
                        required
                        value={loginEmail}
                        onChange={(e)=>setLoginEmail(e.target.value)}/>
                    </div>
                    <div className="loginPassword">
                        <MdLockOpen/>
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