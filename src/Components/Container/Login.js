import React from 'react'
import './signlog.css';
export default function Login() {
  return (
    <div className="login-box">
  <p>Login</p>
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
      <button type='submit'>
      Submit
      </button>
    </a>
    
  </form>
  <p>Don't have an account? <a href="/SingUp" className="a2">Sign up!</a></p>
</div>
  )
}
