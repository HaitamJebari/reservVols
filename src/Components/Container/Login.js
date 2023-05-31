import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signlog.css';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message , setMessage] = useState('');

  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setEmail('');
    setPassword('');
    setMessage('');

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        
        email: email,
        password: password,
      });
      const { action } = response.data;
      if (action === 'true') {
        history('/');
      } else {
        setMessage('Email or password is incorrect');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-box">
      <p>Login</p>
      <form>
        <div className="user-box">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label>Password</label>
        </div>

        <button className='buttonSub' onClick={handleLogin}>
          Submit
        </button>

      </form>
      <p>Don't have an account? <a href="/SingUp" className="a2">Sign up!</a></p>

      <div className='error'>{message}</div>
    </div>
  );
}
