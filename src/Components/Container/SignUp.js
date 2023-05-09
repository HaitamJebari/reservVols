import React from 'react'
import './signlog.css';
export default function Singup() {
  return (
    <div className="login-box">
  <p>Sign Up</p>
  <form>
    <div className="user-box">
      <input type="text"/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password"/>
      <label>Password</label>
    </div>
    <a href="">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p>You already have account : <a href="/login" className="a2">Login</a></p>
</div>
  )
}
