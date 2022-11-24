import React, { useState } from 'react';
import "./Login1_body.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
export default function Login1_body() {
const[userName,setUserName]=useState('');
 const[password,setPassword]=useState('');
  return (
    <div className='full'>
    <div className='loginBox'>
    <p id="title"><b><center>User Login</center></b></p>
    <input  type="text" value={userName}
     onChange={e=>setUserName(e.target.value)}
    placeholder="USERNAME" required></input><br></br><br></br>
    <input  type="password" value={password}
     onChange={e=>setPassword(e.target.value)}
    placeholder="PASSWORD" required></input><br></br><br></br><br></br>
    <button type='submit' className='btn btn-primary m-5'>LOGIN</button><br></br><br></br>
    <center><a href='#'>Create Account </a>or
    <a href='#'> Forgot password?</a></center><br></br>
    <p><center><b>or Sign In using</b></center></p>
    <div className='icons'>
    <ul>
    <li><FcGoogle  size="47px"/></li>
    <li><BsFacebook size="40px" color='blue'/></li>
    <li><BsTwitter size="40px" color='blue'/></li>
    </ul>
    </div>
    </div>
    </div>
  )
}
